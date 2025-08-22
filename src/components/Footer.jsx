// src/components/Footer.jsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        {/* Links */}
        <div className="mb-2">
          <Link to="/contact" className="mx-3 hover:underline">
            Contact Us
          </Link>
          {" | "}
          <Link to="/privacy" className="mx-3 hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-300">
          © {new Date().getFullYear()} Job Portal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
