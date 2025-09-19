import React, { useState } from 'react';
import { MenuIcon, XIcon, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Globe size={24} className="text-teal-600 mr-2" />
            <h1 className="text-2xl font-bold text-teal-600">NourishNet</h1>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors">
            Home
          </Link>
          <Link to="/request-support" className="text-gray-700 hover:text-teal-600 transition-colors">
            Request Support
          </Link>
          <Link to="/become-donor" className="text-gray-700 hover:text-teal-600 transition-colors">
            Become a Donor
          </Link>
          <Link to="/track-donation" className="text-gray-700 hover:text-teal-600 transition-colors">
            Track Donation
          </Link>
          <Link to="/social-activity" className="text-gray-700 hover:text-teal-600 transition-colors">
            Our Impact
          </Link>
          <Link to="/instant-support" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
            Instant Support
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/request-support" className="text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Request Support
            </Link>
            <Link to="/become-donor" className="text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Become a Donor
            </Link>
            <Link to="/track-donation" className="text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Track Donation
            </Link>
            <Link to="/social-activity" className="text-gray-700 hover:text-teal-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Our Impact
            </Link>
            <Link to="/instant-support" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Instant Support
            </Link>
          </div>
        </div>}
    </header>;
}