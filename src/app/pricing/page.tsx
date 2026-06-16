import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Pricing</h1>
      <p className="mb-4 text-gray-300">Transparent, premium‑grade pricing for our AI solutions.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Starter</h2>
          <p className="text-gray-300 mb-2">Ideal for small teams.</p>
          <p className="text-indigo-400 text-3xl font-bold mb-4">$5,000</p>
          <ul className="text-gray-300 list-disc list-inside mb-4">
            <li>Consultation</li>
            <li>Custom AI model (small)</li>
            <li>Basic integration</li>
          </ul>
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-block">Get Started</Link>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Growth</h2>
          <p className="text-gray-300 mb-2">For scaling startups.</p>
          <p className="text-indigo-400 text-3xl font-bold mb-4">$10,000</p>
          <ul className="text-gray-300 list-disc list-inside mb-4">
            <li>Full‑stack AI solution</li>
            <li>Custom model training</li>
            <li>Premium support</li>
          </ul>
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-block">Get Started</Link>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Enterprise</h2>
          <p className="text-gray-300 mb-2">Tailored for large organizations.</p>
          <p className="text-indigo-400 text-3xl font-bold mb-4">Contact Us</p>
          <ul className="text-gray-300 list-disc list-inside mb-4">
            <li>Dedicated team</li>
            <li>Scalable infrastructure</li>
            <li>On‑site training & support</li>
          </ul>
          <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded inline-block">Contact Sales</Link>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
