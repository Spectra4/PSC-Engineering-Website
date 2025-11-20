"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false); // ✅ Modal form state

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // ✅ Global trigger for modal
    const openHandler = () => setFormOpen(true);
    window.addEventListener("openContactForm", openHandler);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openContactForm", openHandler);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-yellow-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-wider relative"
          >
            <motion.span
              className="text-yellow-500"
              animate={{
                textShadow: [
                  "0px 0px 4px #FFD700",
                  "0px 0px 12px #FFD700",
                  "0px 0px 4px #FFD700",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Crush
            </motion.span>
            Tech
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
                <motion.span
                  layoutId="underline"
                  className={`absolute left-0 -bottom-1 h-2px bg-yellow-400 rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormOpen(true)} // ✅ Open form
              className="ml-4 px-5 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 hover:shadow-yellow-400/30 transition-all"
            >
              Contact Now
            </motion.button>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-gray-900/95 backdrop-blur-md border-t border-yellow-500/10 transition-all overflow-hidden ${
            menuOpen ? "max-h-[400px] py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-left px-4 gap-5 text-gray-300 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-colors ${
                    pathname === link.href
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.header>

      {/* ✅ MODAL FORM */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-999 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 relative border border-yellow-500/30"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setFormOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-yellow-400"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-4 text-yellow-400">
                Get in Touch
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 outline-none resize-none"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-yellow-500 text-gray-900 font-semibold py-2 rounded-lg shadow-md hover:bg-yellow-400 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
