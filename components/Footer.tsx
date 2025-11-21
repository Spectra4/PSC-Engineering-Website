"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#010DF5] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">StoneCrushTech</h2>
          <p className="text-gray-200 leading-relaxed">
            Precision-engineered stone crushing solutions crafted for unmatched
            durability, performance, and reliability powering growth nationwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Products", href: "/products" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-white hover:underline transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-white mt-1" />
              <span>Plot 12, Industrial Estate, Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-white mt-1" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-white mt-1" />
              <span>info@stonecrushtech.in</span>
            </li>
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Location Map</h3>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.298231842842!2d73.85674397496377!3d18.515009982578307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c076b0000001%3A0x38dcb1d8c41e6bb9!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709988888888"
              width="100%"
              height="180"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm text-gray-200">
        © {year} <span className="font-semibold">StoneCrushTech</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
