"use client";
import { useEffect, useState } from 'react';

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quotes || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-8">Loading quotes…</p>;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-8 bg-neutral-50">
      <h2 className="text-3xl font-bold mb-6">Submitted Quotes</h2>
      {quotes.length === 0 ? (
        <p>No quotes submitted yet.</p>
      ) : (
        <ul className="w-full max-w-2xl space-y-4">
          {quotes.map((q, idx) => (
            <li key={idx} className="p-4 border rounded bg-white shadow">
              <p><strong>Name:</strong> {q.name}</p>
              <p><strong>Email:</strong> {q.email}</p>
              <p><strong>Phone:</strong> {q.phone}</p>
              <p><strong>Message:</strong> {q.message}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
