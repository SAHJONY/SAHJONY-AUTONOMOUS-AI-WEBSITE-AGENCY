import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
      <p className="mb-4 text-gray-300">
        Showcasing our premium AI‑driven projects. Each case study highlights the challenge, our innovative solution, and measurable results.
      </p>
      {/* Placeholder cards – replace with real projects later */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Project Alpha</h2>
          <p className="text-gray-300">AI‑powered automation platform for a leading logistics firm.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Project Beta</h2>
          <p className="text-gray-300">Custom LLM integration for a financial services provider.</p>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
