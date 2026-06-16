import Link from 'next/link';

export default function TestimonialsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <blockquote className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-300 mb-4">
            "Sahjony AI transformed our workflow with cutting‑edge LLM integration. The results were immediate and measurable."
          </p>
          <footer className="text-indigo-400">- Jane Doe, CTO, TechCorp</footer>
        </blockquote>
        <blockquote className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-gray-300 mb-4">
            "The premium design and seamless AI capabilities set a new standard for our product. Highly recommend!"
          </p>
          <footer className="text-indigo-400">- John Smith, Founder, StartupX</footer>
        </blockquote>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
