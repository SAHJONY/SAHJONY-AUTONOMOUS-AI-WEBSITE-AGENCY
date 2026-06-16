/* Image import removed – hero now text‑only */
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* NAVIGATION */}
      <nav className="sticky top-0 w-full bg-gray-800/90 backdrop-blur-md border-b border-gray-700 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-2xl font-bold text-white">Sahjony AI</div>
          <div className="space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white hover:underline">Home</Link>
            <Link href="/services" className="text-gray-300 hover:text-white hover:underline">Services</Link>
            <Link href="/about" className="text-gray-300 hover:text-white hover:underline">About</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white hover:underline">Contact</Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white hover:underline">Portfolio</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white hover:underline">Blog</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white hover:underline">Pricing</Link>
            <Link href="/faq" className="text-gray-300 hover:text-white hover:underline">FAQ</Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-white hover:underline">Testimonials</Link>
            <Link href="/team" className="text-gray-300 hover:text-white hover:underline">Team</Link>
            <Link href="/careers" className="text-gray-300 hover:text-white hover:underline">Careers</Link>
          </div>
        </div>
      </nav>

      {/* HERO - Text‑only premium AI agency */}
      <section className="relative w-full h-[720px] overflow-hidden">
        {/* Cinematic 8K‑style video background */}
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-cityscape-15533-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark gradient overlay with text */}

          <div className="bg-gradient-to-b from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center text-white text-center px-4 space-y-6">
            <div className="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
            <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Elevate Your Brand with AI‑Driven Solutions
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium drop-shadow-md mt-4">
              Tailored AI experiences that deliver real results
            </h2>
            <p className="text-lg md:text-xl mt-6 drop-shadow">
              Our expert team builds intelligent solutions that boost performance, streamline operations, and delight your customers.
            </p>
            <a href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full mt-8 transition-all duration-300 ease-in-out transform hover:scale-105 animate-pulse inline-block">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 bg-gray-800 w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-100 mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-100 mb-3">AI Strategy & Consulting</h4>
              <p className="text-gray-300">Road‑map your AI journey, from data foundations to production‑grade models.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Custom Model Development</h4>
              <p className="text-gray-300">Build, fine‑tune, and deploy proprietary LLMs & vision models.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-100 mb-3">Product Integration</h4>
              <p className="text-gray-300">Embed AI into SaaS, mobile, or web products with seamless APIs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 bg-gray-900 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-100 mb-6">Why Choose Us?</h3>
          <p className="text-lg text-gray-300 mb-4">
            We combine deep technical expertise with a design‑first mindset to deliver AI‑powered experiences that look and feel premium.
          </p>
          <p className="text-gray-400">
            From concept to launch, we handle strategy, engineering, UI/UX, and ongoing optimization.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-8 w-full">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Sahjony AI – All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="https://github.com/SAHJONY" className="hover:underline" target="_blank" rel="noopener noreferrer">GitHub</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
