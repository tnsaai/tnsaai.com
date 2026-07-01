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
        if (isHighlight) return `font-bold text-black`
        return ''
    }

    const formatCell = (value: number | null | undefined) => {
        if (value == null || value === 0) return '\u2014'
        return `${value}%`
    }

    return (
        <div>
            {(title || description) && (
                <div className="mb-4">
                    {title && <h3 className="text-base font-medium text-black">{title}</h3>}
                    {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
                </div>
            )}
            <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm rounded-xl overflow-hidden">
                    <thead>
                        <tr className="text-xs text-gray-400">
                            <th className="pb-3 pr-2 font-medium uppercase tracking-wide">Benchmark</th>
                            {isPro ? (
                                <th className="py-3 px-8 text-center font-bold text-black rounded-tl-lg border-t border-l border-r border-gray-300 bg-white" style={{borderBottom: 'none'}}>NGen-4.1 Pro</th>
                            ) : (
                                <th className="py-3 px-8 text-center font-bold text-black rounded-tl-lg border-t border-l border-r border-gray-300 bg-white" style={{borderBottom: 'none'}}>NGen-4.1</th>
                            )}
                            <th className="pb-3 px-1 text-center font-medium">GPT-5.5</th>
                            <th className="pb-3 px-1 text-center font-medium">Gemini 3.1 Pro</th>
                            <th className="pb-3 px-1 text-center font-medium">Claude Opus 4.7</th>
                            <th className="pb-3 pl-1 text-center font-medium">Mythos Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, i) => {
                            const isLast = i === data.length - 1
                            return (
                                <tr key={i} className="group hover:bg-gray-50/80 transition-colors">
                                    <td className={`py-2.5 pr-2 font-medium text-gray-700 ${i !== data.length - 1 ? 'border-b border-gray-50' : ''}`}>{row.benchmark}</td>
                                    <td className={`py-3 px-8 text-center tabular-nums bg-white border-l border-r border-gray-300 ${isLast ? 'border-b rounded-bl-lg rounded-br-lg' : ''} ${getCellClass(isPro ? row.ngen41Pro : row.ngen41, true)}`}>
                                        {formatCell(isPro ? row.ngen41Pro : row.ngen41)}
                                    </td>
                                    <td className={`py-2.5 px-1 text-center tabular-nums text-gray-600 ${i !== data.length - 1 ? 'border-b border-gray-50' : ''}`}>{formatCell(row.gpt55)}</td>
                                    <td className={`py-2.5 px-1 text-center tabular-nums text-gray-600 ${i !== data.length - 1 ? 'border-b border-gray-50' : ''}`}>{formatCell(row.gemini31Pro)}</td>
                                    <td className={`py-2.5 px-1 text-center tabular-nums text-gray-600 ${i !== data.length - 1 ? 'border-b border-gray-50' : ''}`}>{formatCell(row.claudeOpus47)}</td>
                                    <td className={`py-2.5 pl-1 text-center tabular-nums text-gray-600 ${i !== data.length - 1 ? 'border-b border-gray-50' : ''}`}>{formatCell(row.mythosPreview)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

// NGen-4.1 Pro benchmark data (column order: ngen41pro | gpt55 | gemini31_pro | claude_opus_47 | mythos_preview)
export const ngen41ProBenchmarkRows: BenchmarkRow[] = [
    { benchmark: 'MMLU Pro', ngen41Pro: 95.8, gpt55: 92.1, gemini31Pro: 92.1, claudeOpus47: 96.5, mythosPreview: 94.3 },
    { benchmark: 'MMLU Redux', ngen41Pro: 97.8, gpt55: 96.5, gemini31Pro: 94.6, claudeOpus47: 96.8, mythosPreview: 94.1 },
    { benchmark: 'MMLU-ProX', ngen41Pro: 91.2, gpt55: 84.3, gemini31Pro: 81.2, claudeOpus47: 85.9, mythosPreview: 81.0 },
    { benchmark: 'MMMLU', ngen41Pro: 94.9, gpt55: 89.2, gemini31Pro: 89.3, claudeOpus47: 92.6, mythosPreview: 91.8 },
    { benchmark: 'C-Eval', ngen41Pro: 97.3, gpt55: 94.3, gemini31Pro: 92.1, claudeOpus47: 94.3, mythosPreview: 91.8 },
    { benchmark: 'IFEval', ngen41Pro: 97.9, gpt55: 94.7, gemini31Pro: 89.7, claudeOpus47: 91.2, mythosPreview: 87.6 },
    { benchmark: 'AIME26', ngen41Pro: 98.1, gpt55: 95.4, gemini31Pro: 95.4, claudeOpus47: 96.7, mythosPreview: 92.4 },
    { benchmark: 'SuperGPQA', ngen41Pro: 73.8, gpt55: 68.2, gemini31Pro: 64.2, claudeOpus47: 68.9, mythosPreview: 62.5 },
    { benchmark: 'SWE-Bench Verified', ngen41Pro: 84.2, gpt55: 80.3, gemini31Pro: 82.6, claudeOpus47: 87.6, mythosPreview: 93.9 },
    { benchmark: 'SWE Bench Pro', ngen41Pro: 60.5, gpt55: 55.2, gemini31Pro: 58.6, claudeOpus47: 64.3, mythosPreview: 77.8 },
    { benchmark: 'SWE-Bench Multilingual', ngen41Pro: 78.3, gpt55: 72.5, gemini31Pro: 80.5, claudeOpus47: null, mythosPreview: null },
    { benchmark: 'Terminal Bench 2.0', ngen41Pro: 66.3, gpt55: 82.7, gemini31Pro: 68.5, claudeOpus47: 69.4, mythosPreview: 68.5 },
    { benchmark: 'MCP-Atlas', ngen41Pro: 72.1, gpt55: 68.2, gemini31Pro: 69.2, claudeOpus47: 77.3, mythosPreview: null },
    { benchmark: 'GPQA Diamond', ngen41Pro: 98.2, gpt55: 95.5, gemini31Pro: 94.4, claudeOpus47: 94.2, mythosPreview: 94.3 },
]

// NGen-4.1 benchmark data (column order: ngen41 | gpt55 | gemini31_pro | claude_opus_47 | mythos_preview)
export const ngen41BenchmarkRows: BenchmarkRow[] = [
    { benchmark: 'MMLU Pro', ngen41: 92.1, gpt55: 96.5, gemini31Pro: 92.1, claudeOpus47: 94.3, mythosPreview: 94.7 },
    { benchmark: 'MMLU Redux', ngen41: 96.5, gpt55: 96.8, gemini31Pro: 94.6, claudeOpus47: 94.1, mythosPreview: 95.9 },
    { benchmark: 'MMLU-ProX', ngen41: 84.3, gpt55: 85.9, gemini31Pro: 81.2, claudeOpus47: 81.0, mythosPreview: 84.8 },
    { benchmark: 'MMMLU', ngen41: 89.2, gpt55: 91.4, gemini31Pro: 89.3, claudeOpus47: 92.6, mythosPreview: 91.1 },
    { benchmark: 'C-Eval', ngen41: 94.3, gpt55: 94.3, gemini31Pro: 92.1, claudeOpus47: 91.8, mythosPreview: 95.2 },
    { benchmark: 'IFEval', ngen41: 94.7, gpt55: 91.2, gemini31Pro: 89.7, claudeOpus47: 87.6, mythosPreview: 92.8 },
    { benchmark: 'AIME26', ngen41: 95.4, gpt55: 96.7, gemini31Pro: 95.4, claudeOpus47: 92.4, mythosPreview: 95.1 },
    { benchmark: 'SuperGPQA', ngen41: 68.2, gpt55: 68.9, gemini31Pro: 64.2, claudeOpus47: 62.5, mythosPreview: 69.5 },
    { benchmark: 'SWE-Bench Verified', ngen41: 80.3, gpt55: 82.6, gemini31Pro: 80.6, claudeOpus47: 87.6, mythosPreview: 93.9 },
    { benchmark: 'SWE Bench Pro', ngen41: 55.2, gpt55: 58.6, gemini31Pro: 54.2, claudeOpus47: 64.3, mythosPreview: 77.8 },
    { benchmark: 'SWE-Bench Multilingual', ngen41: 72.5, gpt55: null, gemini31Pro: 80.5, claudeOpus47: null, mythosPreview: null },
    { benchmark: 'Terminal Bench 2.0', ngen41: 60.7, gpt55: 82.7, gemini31Pro: 69.4, claudeOpus47: 68.5, mythosPreview: 82.0 },
    { benchmark: 'MCP-Atlas', ngen41: 68.2, gpt55: 68.1, gemini31Pro: 77.3, claudeOpus47: 69.2, mythosPreview: null },
    { benchmark: 'GPQA Diamond', ngen41: 95.5, gpt55: 94.4, gemini31Pro: 94.2, claudeOpus47: 94.3, mythosPreview: 94.6 },
]

