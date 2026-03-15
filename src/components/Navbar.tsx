import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Notices', path: '/notices' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex space-x-4">
          <span className="flex items-center"><Phone size={14} className="mr-1" /> 9939996397</span>
          <span className="flex items-center"><Mail size={14} className="mr-1" /> info@anniebesant.edu.in</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/login" className="hover:text-yellow-400 transition">Parent Portal</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Admin Login</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-yellow-400 font-bold text-xl mr-3">
                ABV
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900 leading-tight">ANNIE BESANT</h1>
                <h2 className="text-sm font-semibold text-yellow-600 tracking-widest">VIDYALAYA</h2>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-900 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-md transition"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t pt-2 mt-2">
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-blue-900" onClick={() => setIsOpen(false)}>Parent Portal</Link>
              <Link to="/login" className="block px-3 py-2 text-base font-medium text-blue-900" onClick={() => setIsOpen(false)}>Admin Login</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
