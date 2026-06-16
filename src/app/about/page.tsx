import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">About Sahjony AI</h1>
      <p className="mb-4 text-gray-300">
        Sahjony AI is a premium AI agency dedicated to delivering cinematic, high‑impact digital experiences. Our blend of deep technical expertise and design excellence sets us apart.
      </p>
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">Our Mission</h2>
      <p className="mb-4 text-gray-300">
        To empower brands with next‑generation AI solutions that captivate audiences and drive conversions.
      </p>
      <h2 className="text-2xl font-semibold text-gray-100 mb-2">Our Vision</h2>
      <p className="mb-4 text-gray-300">
        A world where AI seamlessly enhances every digital interaction, delivering premium experiences at scale.
      </p>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
