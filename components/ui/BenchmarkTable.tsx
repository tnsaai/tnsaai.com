'use client'

import React from 'react'

interface BenchmarkRow {
    category: string
    benchmark: string
    value: string | number
    competitorValue?: string | number
    competitorName?: string
}

interface BenchmarkTableProps {
    title?: string
    rows: BenchmarkRow[]
}

export function BenchmarkTable({ title = "Benchmark Performance.", rows }: BenchmarkTableProps) {
    return (
        <div className="mb-16">
            <h2 className="text-2xl text-gray-900 mb-4">{title}</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse text-gray-900">
                    <thead>
                        <tr className="border-b border-gray-300">
                            <th className="text-left py-3 px-2 font-semibold">Category</th>
                            <th className="text-left py-3 px-2 font-semibold">Benchmark</th>
                            <th className="text-right py-3 px-2 font-semibold">Score</th>
                            <th className="text-right py-3 px-2 font-semibold text-gray-400">Industry Avg.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, index) => (
                            <tr key={index} className="border-b border-gray-100 last:border-none">
                                <td className="py-3 px-2 font-medium">{row.category}</td>
                                <td className="py-3 px-2">{row.benchmark}</td>
                                <td className="text-right py-3 px-2 font-semibold">{row.value}</td>
                                <td className="text-right py-3 px-2 text-gray-400">
                                    {row.competitorValue ?? "—"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
