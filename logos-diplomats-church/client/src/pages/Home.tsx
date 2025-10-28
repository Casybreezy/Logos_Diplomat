import { Mail, Phone, MapPin, Users, Clock, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo's Diplomats Church" className="h-16 w-16 object-contain" />
          </div>
          <nav className="flex gap-8">
            <a href="#about" className="text-blue-600 hover:text-blue-700 font-medium">
              About
            </a>
            <a href="#services" className="text-blue-600 hover:text-blue-700 font-medium">
              Services
            </a>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to Logo's Diplomats Church
            </h2>
            <p className="text-xl text-gray-600 font-medium">
              Spreading the Word. Building the Kingdom.
            </p>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3 mb-6">
              <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="text-3xl font-bold text-gray-900">About Us</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Logo's Diplomats is a vibrant, spirit-filled church committed to sharing the Gospel, raising leaders, and serving our community with love and excellence.
            </p>
          </div>
        </section>

        {/* Service Times Section */}
        <section id="services" className="py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="text-3xl font-bold text-gray-900">Service Times</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Sunday Celebration</p>
                  <p className="text-gray-600">10:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Users className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Bible Study</p>
                  <p className="text-gray-600">Wednesday 6:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Prayer Meeting</p>
                  <p className="text-gray-600">Friday 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-start gap-3 mb-6">
              <Mail className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <h3 className="text-3xl font-bold text-gray-900">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a
                    href="mailto:info@logosdiplomats.org"
                    className="text-blue-600 hover:text-blue-700 break-all"
                  >
                    info@logosdiplomats.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">012 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-700">123 Faith Avenue, Pretoria, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-300">
            © 2025 Logo's Diplomats Church. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
