import { Link } from "wouter";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#22223b] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Mountain className="h-8 w-8 text-[#FF9933]/90" />
              <h3 className="text-2xl font-bold font-playfair">Trouville</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              Your trusted partner for exploring the incredible beauty and rich culture of India. Creating unforgettable memories since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base"
                >
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Popular Destinations</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base">
                  Golden Triangle
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base">
                  Kerala Backwaters
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base">
                  Kashmir Valley
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base">
                  Rajasthan
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FF9933]/90 transition-colors duration-300 text-base">
                  Goa Beaches
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#FF9933]/90 mt-1" />
                <p className="text-gray-300 text-base">123 Travel Street, Delhi, India - 110001</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#FF9933]/90 mt-1" />
                <p className="text-gray-300 text-base">+91 98765 43210</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#FF9933]/90 mt-1" />
                <p className="text-gray-300 text-base">info@trouville.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-base">
            © 2025 Trouville. All rights reserved. | Designed with ❤️ for incredible India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;