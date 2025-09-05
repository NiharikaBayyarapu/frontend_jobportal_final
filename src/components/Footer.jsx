// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* About */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Your trusted platform for connecting job seekers with top employers. 
            Find opportunities that match your skills and build your career with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400 transition">About Us</Link></li>
            <li><Link to="/jobs" className="hover:text-yellow-400 transition">Find Jobs</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex justify-center md:justify-start items-center gap-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <span>+91 8374997919</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <span>support@jobportal.com</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-3">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span>Hyderabad, India</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5">
            <a href="#" className="hover:text-yellow-400 transition"><Facebook /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Twitter /></a>
            <a href="#" className="hover:text-yellow-400 transition"><Linkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-300 text-sm mt-6">
        © {new Date().getFullYear()} <span className="text-white font-semibold">Job Portal</span>. All rights reserved.
      </div>
    </footer>
  );
}
