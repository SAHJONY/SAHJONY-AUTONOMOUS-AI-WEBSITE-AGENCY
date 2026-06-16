import Link from 'next/link';

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Careers</h1>
      <p className="mb-4 text-gray-300">Join our elite AI team and help shape the future of premium digital experiences.</p>
      <ul className="list-disc list-inside space-y-4 text-gray-300">
        <li><strong>AI Research Engineer</strong> – Work on cutting‑edge LLM research.</li>
        <li><strong>Full‑Stack Engineer</strong> – Build scalable AI‑enabled products.</li>
        <li><strong>UX Designer</strong> – Craft cinematic, high‑impact interfaces.</li>
      </ul>
      <div className="mt-8">
        <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-block">Apply Now</Link>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
