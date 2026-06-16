import Link from 'next/link';

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="mb-4 text-gray-300">Insights, tutorials, and thought leadership on AI, machine learning, and premium digital experiences.</p>
      {/* Sample post list */}
      <ul className="space-y-6">
        <li className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-100 mb-1">The Future of AI‑Driven UX</h2>
          <p className="text-gray-300">Exploring how generative models reshape user interfaces.</p>
          <Link href="#" className="text-indigo-400 hover:underline">Read more →</Link>
        </li>
        <li className="bg-gray-800 p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-100 mb-1">Scaling LLMs for Enterprise</h2>
          <p className="text-gray-300">Best practices for deployment, monitoring, and cost control.</p>
          <Link href="#" className="text-indigo-400 hover:underline">Read more →</Link>
        </li>
      </ul>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
