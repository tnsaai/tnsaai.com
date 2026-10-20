import { ngen43BenchmarkGroups, ngen43BenchmarkModels } from '@/content/ngen43Benchmarks'

type BenchmarkGroup = (typeof ngen43BenchmarkGroups)[number]

export function NGen43BenchmarkTable({ primaryModel = 'NGen-4.3 Pro' }: { primaryModel?: string }) {
  const visibleModels = [primaryModel, ...ngen43BenchmarkModels.slice(1)].filter((_, index) => index !== 1)

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1320px] border-collapse text-left text-sm">
        <thead>
          <tr className="text-[11px] text-gray-400">
            <th className="sticky left-0 z-20 w-[230px] bg-white pb-3 pr-5 font-medium uppercase tracking-wide">Benchmark</th>
            {visibleModels.map((model, index) => (
              <th
                key={model}
                className={`w-[108px] px-3 text-center text-[11px] font-medium leading-4 ${index === 0 ? 'rounded-t-lg border-l border-r border-t border-gray-300 bg-white py-3 font-bold text-black' : 'pb-3 text-gray-400'}`}
              >
                {model}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ngen43BenchmarkGroups.map((group, index) => (
            <FragmentGroup key={group.name} group={group} visibleModels={visibleModels} isLastGroup={index === ngen43BenchmarkGroups.length - 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FragmentGroup({ group, visibleModels, isLastGroup }: { group: BenchmarkGroup; visibleModels: string[]; isLastGroup: boolean }) {
  return (
    <>
      <tr className="border-b border-gray-100">
        <th className="sticky left-0 z-10 bg-white pb-2 pr-5 pt-6 text-[10px] font-medium uppercase tracking-[0.16em] text-gray-400">{group.name}</th>
        {visibleModels.map((model, index) => (
          <td key={`${group.name}-${model}`} className={index === 0 ? 'border-l border-r border-gray-300 bg-white' : ''} />
        ))}
      </tr>
      {group.rows.map((row, rowIndex) => {
        const isLast = isLastGroup && rowIndex === group.rows.length - 1
        return (
        <tr key={row[0]} className="group bg-white">
          <th className={`sticky left-0 z-10 bg-white py-2.5 pr-5 text-[12px] font-medium text-gray-700 ${rowIndex !== group.rows.length - 1 ? 'border-b border-gray-100' : ''}`}>{row[0]}</th>
          {row.slice(1).filter((_, index) => index !== 1).map((score, index) => {
            return (
              <td
                key={`${row[0]}-${visibleModels[index]}`}
                className={`px-3 py-3 text-center text-[12px] tabular-nums ${index === 0 ? `border-l border-r border-gray-300 bg-white font-bold text-black ${isLast ? 'rounded-b-lg border-b' : ''}` : `text-gray-600 ${rowIndex !== group.rows.length - 1 ? 'border-b border-gray-100' : ''}`}`}
              >
                {Number(score).toFixed(1)}%
              </td>
            )
          })}
        </tr>
      )})}
    </>
  )
}
