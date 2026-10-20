import math, sys
def mulberry32(seed):
    a = seed & 0xffffffff
    def r():
        nonlocal a
        a = (a + 0x6D2B79F5) & 0xffffffff
        t = a
        t = ((t ^ (t >> 15)) * (1 | t)) & 0xffffffff
        t = ((t + (((t ^ (t >> 7)) * (61 | t)) & 0xffffffff)) & 0xffffffff) ^ t
        return ((t ^ (t >> 14)) & 0xffffffff) / 4294967296
    return r
def build(n, seed, Rc=0.55, q=12, order="xy"):
    r = mulberry32(seed); P=[]
    if order=="xy":
        for i in range(n): u=r(); v=r(); P.append((0.07+0.86*u, 0.08+0.84*v))
    else:
        us=[r() for _ in range(n)]; vs=[r() for _ in range(n)]
        P=[(0.07+0.86*u,0.08+0.84*v) for u,v in zip(us,vs)]
    d=lambda i,j: math.dist(P[i],P[j])
    E=set()
    for i in range(n):
        nb=sorted([(d(i,j),j) for j in range(n) if j!=i and d(i,j)<=Rc])[:q]
        for _,j in nb: E.add((min(i,j),max(i,j)))
    E=sorted(E, key=lambda e:(d(*e),e[0],e[1]))
    par=list(range(n))
    def f(x):
        while par[x]!=x: par[x]=par[par[x]]; x=par[x]
        return x
    T=[]
    for u,v in E:
        a,b=f(u),f(v)
        if a!=b: par[a]=b; T.append((u,v))
    return P,E,T
def tree_path(n,T,u,v):
    adj={i:[] for i in range(n)}
    for a,b in T: adj[a].append(b); adj[b].append(a)
    prev={u:None}; st=[u]
    while st:
        x=st.pop()
        for y in adj[x]:
            if y not in prev: prev[y]=x; st.append(y)
    path=[]; x=v
    while prev.get(x) is not None:
        p=prev[x]; path.append((min(x,p),max(x,p))); x=p
    return set(path)
def greedy(n,E,T,k):
    Ts=set(T); L=[e for e in E if e not in Ts]
    paths={l:tree_path(n,T,*l) for l in L}
    cov=set(); S=[]; gains=[]
    for _ in range(k):
        best=None
        for l in L:
            if l in S: continue
            g=len(paths[l]-cov)
            if best is None or g>best[0]: best=(g,l)
        if best is None or best[0]==0: break
        S.append(best[1]); gains.append(best[0]); cov|=paths[best[1]]
    return S,gains,cov
