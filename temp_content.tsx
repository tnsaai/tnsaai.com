import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main className="container mx-auto px-4 lg:px-6 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl tracking-tight">
            NGen 3.5/3.9 Model Benchmarks
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            A comparative analysis of model efficiency across TNSA’s NGen 3 models and leading open-foundation LLMs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">NGen3 Speed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">PERFORMANCE / MODELS</th>
                    <th className="px-4 py-2">NGEN 3.9 PRO</th>
                    <th className="px-4 py-2">NGEN 3.9 MAX V3</th>
                    <th className="px-4 py-2">NGEN 3.5 PRO</th>
                    <th className="px-4 py-2">NGEN 3.5 MAX</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  <tr>
                    <td className="px-4 py-2">TOKENS PER SECOND (TPS)</td>
                    <td className="px-4 py-2 text-center">80.41</td>
                    <td className="px-4 py-2 text-center">52.59</td>
                    <td className="px-4 py-2 text-center">79.11</td>
                    <td className="px-4 py-2 text-center">52.59</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">PROMPT EVAL RATE (INPUT)</td>
                    <td className="px-4 py-2 text-center">2080.90</td>
                    <td className="px-4 py-2 text-center">1516.89</td>
                    <td className="px-4 py-2 text-center">2685.88</td>
                    <td className="px-4 py-2 text-center">1516.89</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">CONTEXT LENGTH (TOKENS)</td>
                    <td className="px-4 py-2 text-center">262,144</td>
                    <td className="px-4 py-2 text-center">262,144</td>
                    <td className="px-4 py-2 text-center">262,144</td>
                    <td className="px-4 py-2 text-center">262,144</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl mb-4">Pricing (Per 1,000 Tokens)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-4 py-2 text-left">MODEL</th>
                    <th className="px-4 py-2">INPUT (₹)</th>
                    <th className="px-4 py-2">OUTPUT (₹)</th>
                    <th className="px-4 py-2">AVG (₹/1K)</th>
                    <th className="px-4 py-2">COST (₹/1M TOKENS)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600">
                  <tr>
                    <td className="px-4 py-2">NGEN 3.9 PRO</td>
                    <td className="px-4 py-2 text-center">0.33</td>
                    <td className="px-4 py-2 text-center">0.50</td>
                    <td className="px-4 py-2 text-center">0.415</td>
                    <td className="px-4 py-2 text-center">415</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">NGEN 3.9 MAX-STABLE-V3</td>
                    <td className="px-4 py-2 text-center">0.83</td>
                    <td className="px-4 py-2 text-center">1.25</td>
                    <td className="px-4 py-2 text-center">1.04</td>
                    <td className="px-4 py-2 text-center">1,040</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">NGEN 3.5 PRO</td>
                    <td className="px-4 py-2 text-center">0.31</td>
                    <td className="px-4 py-2 text-center">0.48</td>
                    <td className="px-4 py-2 text-center">0.395</td>
                    <td className="px-4 py-2 text-center">395</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">NGEN 3.5 MAX</td>
                    <td className="px-4 py-2 text-center">0.79</td>
                    <td className="px-4 py-2 text-center">1.18</td>
                    <td className="px-4 py-2 text-center">0.985</td>
                    <td className="px-4 py-2 text-center">985</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-12">
          <h2 className="text-2xl mb-4">Quality / Cost Ratios</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">RANK</th>
                  <th className="px-4 py-2 text-left">MODEL</th>
                  <th className="px-4 py-2">AVG QUALITY (Q)</th>
                  <th className="px-4 py-2">COST PER 1M (₹)</th>
                  <th className="px-4 py-2">REPORTED QCR (×1,000)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-4 py-2 text-center">1</td>
                  <td className="px-4 py-2">NGen 3.5 Pro</td>
                  <td className="px-4 py-2 text-center">67.26</td>
                  <td className="px-4 py-2 text-center">395</td>
                  <td className="px-4 py-2 text-center">170.3</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center">2</td>
                  <td className="px-4 py-2">NGen 3.9 Pro</td>
                  <td className="px-4 py-2 text-center">69.93</td>
                  <td className="px-4 py-2 text-center">415</td>
                  <td className="px-4 py-2 text-center">168.5</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center">3</td>
                  <td className="px-4 py-2">NGen 3.5 Max</td>
                  <td className="px-4 py-2 text-center">74.54</td>
                  <td className="px-4 py-2 text-center">985</td>
                  <td className="px-4 py-2 text-center">75.7</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-center">4</td>
                  <td className="px-4 py-2">NGen 3.9 Max V3</td>
                  <td className="px-4 py-2 text-center">78.15</td>
                  <td className="px-4 py-2 text-center">1,040</td>
                  <td className="px-4 py-2 text-center">75.1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-12">
          <h2 className="text-2xl mb-4">Client Insights</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left">Model Tier</th>
                  <th className="px-4 py-2 text-left">Ideal Use Case</th>
                  <th className="px-4 py-2 text-left">Key Strength</th>
                  <th className="px-4 py-2 text-left">Operational Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                <tr>
                  <td className="px-4 py-2">NGen 3.5 Pro</td>
                  <td className="px-4 py-2">General-purpose chat, low-cost deployment</td>
                  <td className="px-4 py-2">Highest efficiency</td>
                  <td className="px-4 py-2">Best ROI for token-based workloads</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">NGen 3.9 Pro</td>
                  <td className="px-4 py-2">Knowledge, reasoning-intensive</td>
                  <td className="px-4 py-2">Near-top accuracy</td>
                  <td className="px-4 py-2">Slightly higher cost, higher precision</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">NGen 3.9 Max V3</td>
                  <td className="px-4 py-2">Enterprise-grade, long-context, multilingual</td>
                  <td className="px-4 py-2">Stability + reasoning</td>
                  <td className="px-4 py-2">SLA-focused deployments</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Page;
