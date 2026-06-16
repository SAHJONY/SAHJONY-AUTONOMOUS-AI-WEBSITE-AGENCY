import Link from 'next/link';

export default function FAQPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <dl className="space-y-6">
        <div>
          <dt className="text-xl font-semibold text-gray-100">What services do you offer?</dt>
          <dd className="text-gray-300">We provide AI strategy, custom model development, integration, and premium UX design.</dd>
        </div>
        <div>
          <dt className="text-xl font-semibold text-gray-100">How long does a project take?</dt>
          <dd className="text-gray-300">Typical timelines range from 4‑12 weeks depending on scope and complexity.</dd>
        </div>
        <div>
          <dt className="text-xl font-semibold text-gray-100">Do you offer post‑launch support?</dt>
          <dd className="text-gray-300">Yes, we provide ongoing monitoring, optimization, and maintenance packages.</dd>
        </div>
      </dl>
      <div className="mt-8">
        <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-block">Ask a Question</Link>
      </div>
      <div className="mt-4">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
