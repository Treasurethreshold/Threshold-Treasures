export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      {/* Header */}
      <header className="w-full px-6 py-4 flex justify-between items-center shadow">
        <div className="text-2xl font-bold">Threshold Treasure</div>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#book" className="hover:text-blue-600">Book</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center text-center px-6 bg-blue-50 py-20">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Welcome to Threshold Treasure</h1>
          <p className="text-lg md:text-xl mb-8">Unlock your potential with expert guidance and consultation</p>
          <a href="#book" className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition">Book a Consultation</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-2xl mx-auto text-lg">Threshold Treasure is committed to helping individuals and businesses reach new heights through personalized consultation and proven strategies.</p>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Business Consultation</h3>
            <p>Strategic advice to grow your business and overcome challenges.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Personal Coaching</h3>
            <p>Unlock personal potential with expert life and career coaching.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">Workshops & Seminars</h3>
            <p>Interactive learning sessions to elevate your skills and mindset.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="book" className="px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Book a Consultation</h2>
        <p className="mb-6 text-lg">Choose a time that works for you and let's connect.</p>
        <div className="max-w-xl mx-auto">
          <iframe
            title="Booking"
            src="https://calendly.com/your-link"
            className="w-full h-[600px] border rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-gray-800 text-white py-8 text-center">
        <p>Contact us: info@thresholdtreasure.com</p>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} Threshold Treasure. All rights reserved.</p>
      </footer>
    </div>
  );
}
