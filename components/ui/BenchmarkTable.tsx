'use client'

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

export function BenchmarkTable({ title = 'Benchmark Performance', rows }: BenchmarkTableProps) {
    return (
        <div>
            <h2 className="mb-5 text-[22px] font-normal leading-tight text-black">{title}</h2>
            <div className="overflow-hidden rounded-[10px] border border-gray-200 bg-white">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] border-collapse text-left text-[13px] text-gray-700">
                        <thead className="bg-gray-50 text-[11px] uppercase tracking-[0.18em] text-gray-500">
                            <tr>
                                <th className="px-5 py-4 font-medium">Category</th>
                                <th className="px-5 py-4 font-medium">Benchmark</th>
                                <th className="px-5 py-4 text-right font-medium text-black">Score</th>
                                <th className="px-5 py-4 text-right font-medium">Industry Avg.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr key={`${row.category}-${row.benchmark}-${index}`} className="border-t border-gray-100">
                                    <td className="px-5 py-4">{row.category}</td>
                                    <td className="px-5 py-4 text-black">{row.benchmark}</td>
                                    <td className="px-5 py-4 text-right font-medium text-black">{row.value}</td>
                                    <td className="px-5 py-4 text-right text-gray-400">
                                        {row.competitorValue ?? '-'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
