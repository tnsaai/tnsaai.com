"use client"

import { Bar } from "recharts"
import { BenchmarkBase, reasoningData, codingData } from "./BenchmarkChart"

export function BenchmarkNGen4Reasoning() {
    return (
        <BenchmarkBase
            data={reasoningData}
            title="NGen 4 Reasoning & Knowledge"
            description="Zero-shot performance of the current NGen 4 flagship series."
        >
            <Bar dataKey="ngen4mini" fill="var(--color-ngen4mini)" radius={4} />
            <Bar dataKey="o3" fill="var(--color-o3)" radius={4} />
            <Bar dataKey="o3mini" fill="var(--color-o3mini)" radius={4} />
            <Bar dataKey="o4mini" fill="var(--color-o4mini)" radius={4} />
            <Bar dataKey="gptoss120b" fill="var(--color-gptoss120b)" radius={4} />
            <Bar dataKey="gptoss20b" fill="var(--color-gptoss20b)" radius={4} />
            <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
        </BenchmarkBase>
    )
}

export function BenchmarkNGen4Coding() {
    return (
        <BenchmarkBase
            data={codingData}
            title="NGen 4 Engineering (SWE-Bench)"
            description="Dedicated Software Engineering performance on SWE-Bench Verified."
            isElo={false}
            yAxisLabel="Accuracy (%)"
        >
            <Bar dataKey="ngen4mini" fill="var(--color-ngen4mini)" radius={4} />
            <Bar dataKey="o3" fill="var(--color-o3)" radius={4} />
            <Bar dataKey="o3mini" fill="var(--color-o3mini)" radius={4} />
            <Bar dataKey="o4mini" fill="var(--color-o4mini)" radius={4} />
            <Bar dataKey="gptoss120b" fill="var(--color-gptoss120b)" radius={4} />
            <Bar dataKey="gptoss20b" fill="var(--color-gptoss20b)" radius={4} />
            <Bar dataKey="deepseekr1" fill="var(--color-deepseekr1)" radius={4} />
        </BenchmarkBase>
    )
}
