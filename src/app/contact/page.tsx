"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4 text-gray-300">We’d love to hear about your AI project. Fill out the form and we’ll get back to you promptly.</p>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-gray-100" required />
        <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-gray-100" required />
        <textarea name="message" placeholder="Message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-gray-100" required />
        <button type="submit" disabled={status === 'sending'} className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        {status === 'sent' && <p className="text-green-400 mt-2">Message sent! We’ll be in touch.</p>}
        {status === 'error' && <p className="text-red-400 mt-2">Oops, something went wrong. Please try again.</p>}
      </form>
      <div className="mt-8">
        <Link href="/" className="text-indigo-400 hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
