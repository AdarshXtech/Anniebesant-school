import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-lg mr-3">
                ABV
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">ANNIE BESANT</h3>
                <h4 className="text-xs font-semibold text-yellow-400 tracking-widest">VIDYALAYA</h4>
              </div>
            </div>
            <p className="text-blue-200 text-sm mb-4">
              Empowering minds, shaping futures. A premier educational institution committed to excellence in academics and character building.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white"><Facebook size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Twitter size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Instagram size={20} /></a>
              <a href="#" className="text-blue-200 hover:text-white"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 border-b border-blue-800 pb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-white transition">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-white transition">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-white transition">Facilities</Link></li>
              <li><Link to="/notices" className="hover:text-white transition">Notice Board</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 border-b border-blue-800 pb-2">Contact Us</h4>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-yellow-400" />
                <span>Annie Besant Vidyalaya<br />Lucknow, Uttar Pradesh<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span>9939996397</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-yellow-400" />
                <span>info@anniebesant.edu.in</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 border-b border-blue-800 pb-2">Location</h4>
            <div className="h-32 bg-blue-800 rounded-md overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.956143991591!2d84.08381027519854!3d26.19810487708031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39924e094bfd7f27%3A0xfd4007db919f9524!2sAnnie%20Besant%20Vidyalaya!5e0!3m2!1sen!2sin!4v1773599097531!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location"
              ></iframe>
            </div>
            <a 
              href="https://maps.app.goo.gl/KnGeSbk5DgKUFRML7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-yellow-400 hover:underline mt-2 inline-block"
            >
              Open in Google Maps
            </a>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-center text-xs text-blue-300 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Annie Besant Vidyalaya. All rights reserved.</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
