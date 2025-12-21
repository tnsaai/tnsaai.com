"use client"

import { Bar } from "recharts"
import { BenchmarkBase, reasoningData, codingData } from "./BenchmarkChart"

export function BenchmarkNGen3Reasoning() {
    return (
        <BenchmarkBase
            data={reasoningData}
            title="NGen 3 Series Reasoning & Knowledge"
            description="Zero-shot performance of the NGen 3.9 and 3.5 series."
        >
            <Bar dataKey="ngen39max" fill="var(--color-ngen39max)" radius={4} />
            <Bar dataKey="ngen39pro" fill="var(--color-ngen39pro)" radius={4} />
            <Bar dataKey="ngen35max" fill="var(--color-ngen35max)" radius={4} />
            <Bar dataKey="ngen35pro" fill="var(--color-ngen35pro)" radius={4} />
            <Bar dataKey="o3mini" fill="var(--color-o3mini)" radius={4} />
            <Bar dataKey="o4mini" fill="var(--color-o4mini)" radius={4} />
            <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
        </BenchmarkBase>
    )
}


