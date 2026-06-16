import Link from 'next/link';

export default function TeamPage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Our Team</h1>
      <p className="mb-4 text-gray-300">A blend of AI researchers, engineers, and design visionaries.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Alice Nguyen</h2>
          <p className="text-gray-300">Chief AI Officer – Leads model strategy and research.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Bob Patel</h2>
          <p className="text-gray-300">Lead Engineer – Builds production AI pipelines.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Cara Lee</h2>
          <p className="text-gray-300">Design Director – Crafts premium UI/UX experiences.</p>
        </div>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
