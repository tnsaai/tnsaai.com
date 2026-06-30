'use client'

interface BenchmarkRow {
    benchmark: string
    ngen41Pro?: number | null
    ngen41?: number | null
    gpt55?: number | null
    claudeOpus47?: number | null
    gemini31Pro?: number | null
    mythosPreview?: number | null
}

interface BenchmarkComparisonTableProps {
    data: BenchmarkRow[]
    highlightCol?: 'ngen41pro' | 'ngen41'
    title?: string
    description?: string
}

export function BenchmarkComparisonTable({ data, highlightCol = 'ngen41pro', title = 'Benchmark Performance', description }: BenchmarkComparisonTableProps) {
    const isPro = highlightCol === 'ngen41pro'

    const getCellClass = (value: number | null | undefined, isHighlight: boolean) => {
        if (value == null || value === 0) return 'text-gray-300'
        if (isHighlight) return `font-semibold ${isPro ? 'text-yellow-700 bg-yellow-50/60' : 'text-amber-700 bg-amber-50/60'}`
        return ''
    }

    const formatCell = (value: number | null | undefined) => {
        if (value == null || value === 0) return '—'
        return `${value}%`
    }

    return (
        <div className="overflow-hidden rounded-[10px] border border-gray-200 bg-white">
            {(title || description) && (
                <div className="border-b border-gray-100 px-5 py-4">
                    {title && <h3 className="text-base font-medium text-black">{title}</h3>}
                    {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-[13px] text-gray-700">
                    <thead className="bg-gray-50/80 text-[11px] uppercase tracking-[0.16em] text-gray-500">
                        <tr>
                            <th className="px-4 py-3 font-medium sticky left-0 bg-inherit">Benchmark</th>
                            {isPro ? (
                                <th className={`px-4 py-3 text-center font-semibold ${isPro ? 'text-yellow-700' : ''} border-l border-yellow-200/50`}>NGen-4.1 Pro</th>
                            ) : (
                                <th className="px-4 py-3 text-center font-semibold text-amber-600 border-l border-amber-200/50">NGen-4.1</th>
                            )}
                            <th className="px-4 py-3 text-center font-medium">GPT-5.5</th>
                            <th className="px-4 py-3 text-center font-medium">Claude Opus 4.7</th>
                            <th className="px-4 py-3 text-center font-medium">Gemini 3.1 Pro</th>
                            <th className="px-4 py-3 text-center font-medium">Mythos Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => (
                            <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50/30' : 'bg-white'} hover:bg-gray-100/60 transition-colors`}>
                                <td className="px-4 py-3 font-medium text-black sticky left-0 bg-inherit">{row.benchmark}</td>
                                {isPro ? (
                                    <td className={`px-4 py-3 text-center border-l border-yellow-200/50 ${getCellClass(row.ngen41Pro, true)}`}>
                                        {formatCell(row.ngen41Pro)}
                                    </td>
                                ) : (
                                    <td className="px-4 py-3 text-center border-l border-amber-200/50">
                                        <span className={getCellClass(row.ngen41, true)}>{formatCell(row.ngen41)}</span>
                                    </td>
                                )}
                                <td className="px-4 py-3 text-center">{formatCell(row.gpt55)}</td>
                                <td className="px-4 py-3 text-center">{formatCell(row.claudeOpus47)}</td>
                                <td className="px-4 py-3 text-center">{formatCell(row.gemini31Pro)}</td>
                                <td className="px-4 py-3 text-center">{formatCell(row.mythosPreview)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// NGen-4.1 Pro benchmark data (column order: ngen41pro | gpt55 | claude_opus_47 | gemini31_pro | mythos_preview)
export const ngen41ProBenchmarkRows: BenchmarkRow[] = [
    { benchmark: 'MMLU Pro', ngen41Pro: 95.8, gpt55: 92.1, claudeOpus47: 92.1, gemini31Pro: 96.5, mythosPreview: 94.3 },
    { benchmark: 'MMLU Redux', ngen41Pro: 97.8, gpt55: 96.5, claudeOpus47: 94.6, gemini31Pro: 96.8, mythosPreview: 94.1 },
    { benchmark: 'MMLU-ProX', ngen41Pro: 91.2, gpt55: 84.3, claudeOpus47: 81.2, gemini31Pro: 85.9, mythosPreview: 81.0 },
    { benchmark: 'MMMLU', ngen41Pro: 94.9, gpt55: 89.2, claudeOpus47: 89.3, gemini31Pro: 92.6, mythosPreview: 91.8 },
    { benchmark: 'C-Eval', ngen41Pro: 97.3, gpt55: 94.3, claudeOpus47: 92.1, gemini31Pro: 94.3, mythosPreview: 91.8 },
    { benchmark: 'IFEval', ngen41Pro: 97.9, gpt55: 94.7, claudeOpus47: 89.7, gemini31Pro: 91.2, mythosPreview: 87.6 },
    { benchmark: 'AIME26', ngen41Pro: 98.1, gpt55: 95.4, claudeOpus47: 95.4, gemini31Pro: 96.7, mythosPreview: 92.4 },
    { benchmark: 'SuperGPQA', ngen41Pro: 73.8, gpt55: 68.2, claudeOpus47: 64.2, gemini31Pro: 68.9, mythosPreview: 62.5 },
    { benchmark: 'SWE-Bench Verified', ngen41Pro: 84.2, gpt55: 80.3, claudeOpus47: 87.6, gemini31Pro: 82.6, mythosPreview: 93.9 },
    { benchmark: 'SWE Bench Pro', ngen41Pro: 60.5, gpt55: 55.2, claudeOpus47: 64.3, gemini31Pro: 58.6, mythosPreview: 77.8 },
    { benchmark: 'SWE-Bench Multilingual', ngen41Pro: 78.3, gpt55: 72.5, claudeOpus47: 80.5, gemini31Pro: null, mythosPreview: null },
    { benchmark: 'Terminal Bench 2.0', ngen41Pro: 66.3, gpt55: 60.7, claudeOpus47: 69.4, gemini31Pro: 82.7, mythosPreview: 68.5 },
    { benchmark: 'MCP-Atlas', ngen41Pro: 72.1, gpt55: 68.2, claudeOpus47: 77.3, gemini31Pro: 69.2, mythosPreview: null },
    { benchmark: 'GPQA Diamond', ngen41Pro: 98.2, gpt55: 95.5, claudeOpus47: 94.2, gemini31Pro: 94.4, mythosPreview: 94.3 },
]

// NGen-4.1 benchmark data (column order: ngen41 | gpt55 | claude_opus_47 | gemini31_pro | mythos_preview)
export const ngen41BenchmarkRows: BenchmarkRow[] = [
    { benchmark: 'MMLU Pro', ngen41: 92.1, gpt55: 96.5, claudeOpus47: 92.1, gemini31Pro: 94.3, mythosPreview: 94.7 },
    { benchmark: 'MMLU Redux', ngen41: 96.5, gpt55: 96.8, claudeOpus47: 94.6, gemini31Pro: 94.1, mythosPreview: 95.9 },
    { benchmark: 'MMLU-ProX', ngen41: 84.3, gpt55: 85.9, claudeOpus47: 81.2, gemini31Pro: 81.0, mythosPreview: 84.8 },
    { benchmark: 'MMMLU', ngen41: 89.2, gpt55: 91.4, claudeOpus47: 89.3, gemini31Pro: 92.6, mythosPreview: 91.1 },
    { benchmark: 'C-Eval', ngen41: 94.3, gpt55: 94.3, claudeOpus47: 92.1, gemini31Pro: 91.8, mythosPreview: 95.2 },
    { benchmark: 'IFEval', ngen41: 94.7, gpt55: 91.2, claudeOpus47: 89.7, gemini31Pro: 87.6, mythosPreview: 92.8 },
    { benchmark: 'AIME26', ngen41: 95.4, gpt55: 96.7, claudeOpus47: 95.4, gemini31Pro: 92.4, mythosPreview: 95.1 },
    { benchmark: 'SuperGPQA', ngen41: 68.2, gpt55: 68.9, claudeOpus47: 64.2, gemini31Pro: 62.5, mythosPreview: 69.5 },
    { benchmark: 'SWE-Bench Verified', ngen41: 80.3, gpt55: 82.6, claudeOpus47: 87.6, gemini31Pro: 80.6, mythosPreview: 93.9 },
    { benchmark: 'SWE Bench Pro', ngen41: 55.2, gpt55: 58.6, claudeOpus47: 64.3, gemini31Pro: 54.2, mythosPreview: 77.8 },
    { benchmark: 'SWE-Bench Multilingual', ngen41: 72.5, gpt55: null, claudeOpus47: 80.5, gemini31Pro: null, mythosPreview: null },
    { benchmark: 'Terminal Bench 2.0', ngen41: 60.7, gpt55: 82.7, claudeOpus47: 69.4, gemini31Pro: 68.5, mythosPreview: 82.0 },
    { benchmark: 'MCP-Atlas', ngen41: 68.2, gpt55: 68.1, claudeOpus47: 77.3, gemini31Pro: 69.2, mythosPreview: null },
    { benchmark: 'GPQA Diamond', ngen41: 95.5, gpt55: 94.4, claudeOpus47: 94.2, gemini31Pro: 94.3, mythosPreview: 94.6 },
]
