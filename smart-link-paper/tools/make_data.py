"""Regenerate every data file and TikZ network snippet used by smart-link.tex.

Run from the paper folder:  python tools/make_data.py
Networks are rebuilt bit-exactly from the Mulberry32 PRNG (Seed 42, Seed 7);
filter / FFT / link-budget curves are recomputed; Monte-Carlo and benchmark
series are the published values of the companion manual (RSBVP v1).
"""
import math, os, sys
import numpy as np
from scipy import signal
sys.path.insert(0, os.path.dirname(__file__))
from net import build, greedy, tree_path

OUT = os.path.join(os.path.dirname(__file__), "..", "data")
os.makedirs(OUT, exist_ok=True)

def write(name, header, rows):
    with open(os.path.join(OUT, name), "w") as f:
        f.write(header + "\n")
        for r in rows:
            f.write(" ".join(("nan" if (isinstance(v, float) and math.isnan(v)) else
                              (f"{v:.6g}" if isinstance(v, float) else str(v))) for v in r) + "\n")

def snippet(name, text):
    with open(os.path.join(OUT, name), "w") as f:
        f.write(text)

# ---------------------------------------------------------------- networks
F = [75, 84, 95, 108, 120, 135]
CCOL = {75: "c75", 84: "c84", 95: "c95", 108: "c108", 120: "c120", 135: "c135"}

def colorize(links, s=9):
    conf = {e: {x for x in links if x != e and set(x) & set(e)} for e in links}
    f = {}
    for e in sorted(links, key=lambda e: (-len(conf[e]), e[0], e[1])):
        for c in F:
            if all(abs(c - f[x]) >= s for x in conf[e] if x in f):
                f[e] = c
                break
    return f

def coords(P, scale_x, scale_y):
    return "\n".join(rf"\coordinate (n{i}) at ({x*scale_x:.3f},{y*scale_y:.3f});" for i, (x, y) in enumerate(P))

# Fig. 1: Seed 7, n = 25, k = 0 vs k = 4
P, E, T = build(25, 7)
S, gains, cov = greedy(25, E, T, 4)
for tag, sel in (("k0", []), ("k4", S)):
    covered = set().union(*[tree_path(25, T, *l) for l in sel]) if sel else set()
    lines = [coords(P, 6.0, 6.0)]
    for e in T:
        style = "protected" if e in covered else "bridge"
        lines.append(rf"\draw[{style}] (n{e[0]}) -- (n{e[1]});")
    for e in sel:
        lines.append(rf"\draw[backup] (n{e[0]}) -- (n{e[1]});")
    for i in range(1, 25):
        lines.append(rf"\node[station] at (n{i}) {{}};")
    lines.append(r"\node[hq] at (n0) {};")
    snippet(f"fig1_{tag}.tex", "\n".join(lines) + "\n")
print("seed7 backups", S, "gains", gains, "covered", len(cov), "/", len(T))

# Fig. 3a: Seed 42, n = 10, k = 3 with carriers
P, E, T = build(10, 42)
S, gains, _ = greedy(10, E, T, 3)
f = colorize(T + S)
lines = [coords(P, 11.0, 9.0)]
for e in T + S:
    st = "backup42" if e in S else "tree42"
    if math.dist(P[e[0]], P[e[1]]) < 0.06:  # too short for an inline label: use a leader line
        lines.append(rf"\draw[{st},draw={CCOL[f[e]]}] (n{e[0]}) -- (n{e[1]});")
        lines.append(rf"\node[carrier,draw={CCOL[f[e]]}] (lab{e[0]}{e[1]}) at ($(n{e[0]})!0.5!(n{e[1]})+(-0.35,-0.75)$) {{{f[e]}}};")
        lines.append(rf"\draw[{CCOL[f[e]]},thin] (lab{e[0]}{e[1]}) -- ($(n{e[0]})!0.5!(n{e[1]})$);")
        continue
    lines.append(rf"\draw[{st},draw={CCOL[f[e]]}] (n{e[0]}) -- node[carrier,draw={CCOL[f[e]]}] {{{f[e]}}} (n{e[1]});")
for i in range(10):
    lines.append(rf"\node[station42] at (n{i}) {{{i}}};")
snippet("fig3a_seed42.tex", "\n".join(lines) + "\n")
print("seed42 candidates", len(E), "backups", S, gains, "carriers", sorted(set(f.values())))

# ---------------------------------------------------------------- hex SIR
rows = []
for N in sorted({i*i + i*j + j*j for i in range(5) for j in range(5)} - {0}):
    if N <= 21:
        rows.append((N, 10*math.log10((3*N)**2/6)))
write("sir.dat", "N sir", rows)

# ---------------------------------------------------------------- filter
fs = 1e6
sos = signal.butter(3, [73e3, 77e3], "bandpass", fs=fs, output="sos")
fm = np.linspace(50e3, 130e3, 801)
_, h = signal.sosfreqz(sos, worN=fm, fs=fs)
write("bp_mag.dat", "f g", [(x/1e3, 20*np.log10(abs(y))) for x, y in zip(fm, h)])
fg = np.linspace(65e3, 85e3, 2001)
_, hg = signal.sosfreqz(sos, worN=fg, fs=fs)
ph = np.unwrap(np.angle(hg))
gd = -np.gradient(ph, 2*np.pi*fg) * 1e6
write("bp_gd.dat", "f gd", [(x/1e3, y) for x, y in zip(fg[::4], gd[::4])])
pts = np.array([66e3, 84e3, 95e3, 108e3, 115e3])
_, hp = signal.sosfreqz(sos, worN=pts, fs=fs)
write("bp_pts.dat", "f g", [(x/1e3, 20*np.log10(abs(y))) for x, y in zip(pts, hp)])
_, h75 = signal.sosfreqz(sos, worN=np.array([75e3]), fs=fs)
print("bp at 66/84/95/108/115k:", np.round(20*np.log10(abs(hp)), 1),
      "gd@75k =", round(float(np.interp(75e3, fg, gd)), 1), "us")

# ---------------------------------------------------------------- heterodyne FFT
Nfft = 65536
t = np.arange(Nfft) / fs
a = 1 + 0.5*np.cos(2*np.pi*500*t)
sin_ = a*np.cos(2*np.pi*95e3*t)
ymix = sin_ * 2*np.cos(2*np.pi*20e3*t)
yout = signal.sosfilt(sos, ymix)
win = np.blackman(Nfft)
fr = np.fft.rfftfreq(Nfft, 1/fs)
def spec(x):
    X = np.abs(np.fft.rfft(x*win))
    return 20*np.log10(X/X.max() + 1e-30)
ref = None
for name, x in (("fft_in", sin_), ("fft_mix", ymix), ("fft_out", yout)):
    X = np.abs(np.fft.rfft(x*win))
    if name == "fft_out":
        db = 20*np.log10(X/np.abs(np.fft.rfft(yout*win)).max() + 1e-30)
        i75, i115 = np.argmin(abs(fr-75e3)), np.argmin(abs(fr-115e3))
        print("image suppression", round(db[i75]-db[i115], 1), "dB")
    else:
        db = 20*np.log10(X/X.max() + 1e-30)
    keep = (fr <= 160e3) & (db > -122)
    rows, last = [], None
    for i in np.nonzero(keep)[0]:
        if last is not None and i != last + 1:
            rows.append((float("nan"), float("nan")))
        rows.append((fr[i]/1e3, max(db[i], -121.0)))
        last = i
    write(name + ".dat", "f db", rows)

# ---------------------------------------------------------------- RF link budget
snr = np.linspace(0, 60, 121)
write("shannon.dat", "snr c4 c9", [(s, 4e3*math.log2(1+10**(s/10)), 9e3*math.log2(1+10**(s/10))) for s in snr])
hops = np.arange(1, 121)
write("af.dat", "h s20 s30 s40", [(int(x), 20-10*math.log10(x), 30-10*math.log10(x), 40-10*math.log10(x)) for x in hops])
c = 3e8
bands = [("75 kHz", 75e3), ("135 kHz", 135e3), ("27 MHz", 27e6), ("145 MHz", 145e6), ("433 MHz", 433e6), ("2.4 GHz", 2.4e9)]
write("antenna.dat", "i len", [(i, c/f0/4) for i, (_, f0) in enumerate(bands)])
print("antenna", [round(c/f0/4, 3) for _, f0 in bands])
print("SNR for 128 kb/s in 9 kHz:", round(10*math.log10(2**(128/9)-1), 1), "dB")
