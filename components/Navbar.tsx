"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const productsRef = useRef<HTMLLIElement | null>(null);

  /* ---------------- HEADER SCROLL ---------------- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------- FIX: FULL SCROLL LOCK FOR MODAL ---------------- */
  useEffect(() => {
    if (formOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [formOpen]);

  /* ---------------- CLICK OUTSIDE PRODUCTS ---------------- */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ---------------- DATA ---------------- */
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const productLinks = [
    { name: "Semi-Mobile Crushing", href: "/products/semi-mobile-crushing" },
    { name: "Wheel-Mounted Crushing", href: "/products/wheel-mounted-crushing" },
    { name: "Vibrating Screens", href: "/products/vibrating-screens" },
    { name: "Conveyors", href: "/products/conveyors" },
    { name: "Vibrating Feeders", href: "/products/vibrating-feeders" },
    { name: "Fabrication Structures", href: "/products/fabrication-structures" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blue-300/10 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* LOGO */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-wider"
          >
            <motion.span
              className="text-blue-400"
              animate={{
                textShadow: [
                  "0px 0px 4px #3B82F6",
                  "0px 0px 12px #3B82F6",
                  "0px 0px 4px #3B82F6",
                ],
              }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Crush
            </motion.span>
            Tech
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-10 text-gray-200 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    pathname === link.href
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <motion.span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* PRODUCTS */}
            <li
              ref={productsRef}
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 transition-colors duration-300 ${
                  pathname.startsWith("/products")
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  pathname.startsWith("/products")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              <AnimatePresence>
                {productsOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl p-4 space-y-2 w-64"
                  >
                    {productLinks.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="block px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {/* CONTACT */}
            <li className="relative group">
              <Link
                href="/contact"
                className={`transition-colors duration-300 ${
                  pathname === "/contact"
                    ? "text-white"
                    : "hover:text-white"
                }`}
              >
                Contact
              </Link>
              <motion.span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  pathname === "/contact"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormOpen(true)}
              className="ml-4 px-5 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all"
            >
              Contact Now
            </motion.button>
          </ul>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="md:hidden bg-black/70 backdrop-blur-md border-t border-white/10 px-6 py-4"
            >
              <ul className="space-y-4 text-gray-300">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}

                {/* MOBILE PRODUCTS */}
                <li>
                  <button
                    onClick={() => setMobileProductsOpen((s) => !s)}
                    className="flex items-center gap-1"
                  >
                    Products
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        mobileProductsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileProductsOpen && (
                      <motion.ul
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        className="ml-4 mt-2 space-y-2"
                      >
                        {productLinks.map((p) => (
                          <li key={p.href}>
                            <Link
                              href={p.href}
                              onClick={() => setMenuOpen(false)}
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* ================= CONTACT MODAL ================= */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm overflow-hidden touch-none p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 relative border border-white/20"
            >
              <button
                onClick={() => setFormOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-4">
                Get in Touch
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 resize-none"
                />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-blue-500 py-2 rounded-lg font-semibold"
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
