"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  // renamed for clarity: controls the sub-dropdown visibility for "Vibrating Screens"
  const [hoverVibratingScreens, setHoverVibratingScreens] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const products = [
    { name: "Stationary", href: "/products/product-1" },
    { name: "Semi-Mobile", href: "/products/product-2" },
    { name: "Wheel-Mounted", href: "/products/product-3" },
    {
      name: "Vibrating Screens",
      href: "/products/product-4",
      subProducts: [
        { name: "Eccentric", href: "/products/product-4/sub-1" },
        { name: "Cardan", href: "/products/product-4/sub-2" },
      ],
    },
    { name: "Vibrating Feeders", href: "/products/product-5" },
    { name: "Conveyors", href: "/products/product-6" },
    { name: "Fabrication Structures", href: "/products/product-7" },
  ];

  const afterProductLinks = [{ name: "Contact", href: "/contact" }];

  // refs for click-outside detection
  const productsRef = useRef<HTMLLIElement | null>(null);
  const subDropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const openHandler = () => setFormOpen(true);
    window.addEventListener("openContactForm", openHandler as EventListener);

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      // Close products dropdown if click outside products container
      if (
        productsRef.current &&
        !productsRef.current.contains(target) &&
        productsOpen
      ) {
        setProductsOpen(false);
        setHoverVibratingScreens(false);
      }
      // Close mobile nested products if clicking outside mobile menu
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        // do not auto-close full mobile menu — only nested in mobile; keep original behavior
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(
        "openContactForm",
        openHandler as EventListener
      );
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [productsOpen]);

  // keyboard accessibility: close menus with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setHoverVibratingScreens(false);
        setMenuOpen(false);
        setMobileProductsOpen(false);
        setFormOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blue-300/10 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="text-2xl font-extrabold text-white tracking-wider relative"
            aria-label="Home"
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

          <ul className="hidden md:flex items-center gap-10 text-gray-200 font-medium">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    pathname === link.href ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <motion.span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* ------------------ PRODUCTS (mega panel) ------------------ */}
            <li
              ref={productsRef}
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => {
                setProductsOpen(false);
                setHoverVibratingScreens(false);
              }}
            >
              <button
                aria-haspopup="true"
                aria-expanded={productsOpen}
                className={`flex items-center gap-1 transition-colors duration-300 ${
                  pathname.startsWith("/products")
                    ? "text-white"
                    : "hover:text-white"
                }`}
                onClick={() => setProductsOpen((s) => !s)}
              >
                Products
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* underline */}
              <motion.span
                className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  pathname.startsWith("/products")
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />

              {/* MEGA PANEL */}
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.25 }}
                    className="
                      absolute top-full -right-40 mt-4
                      bg-white/10 backdrop-blur-2xl
                      border border-white/20
                      rounded-2xl shadow-2xl
                      p-8 w-[900px]
                      grid grid-cols-3 gap-12
                      text-white
                    "
                  >
                    {/* COLUMN 1 BLOCK (Column + Divider) */}
                    <div className="flex space-x-8">
                      <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg pb-1 border-b border-white/10">
                          Stationary Crushing
                        </h3>

                        <ul className="space-y-1.5 text-sm">
                          <li><Link href="/products/stationary-2stage-jj" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">II Stage – Jaw–Jaw</Link></li>
                          <li><Link href="/products/stationary-2stage-jc" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">II Stage – Jaw–Cone</Link></li>
                          <li><Link href="/products/stationary-3stage-jjv" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Jaw–Jaw–VSI</Link></li>
                          <li><Link href="/products/stationary-3stage-jcv" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Jaw–Cone–VSI</Link></li>
                          <li><Link href="/products/stationary-msand" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">M-Sand – VSI + Screen</Link></li>
                          <li><Link href="/products/stationary-psand" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">P-Sand – VSI + Screen + Wash</Link></li>
                        </ul>
                      </div>

                      {/* DIVIDER */}
                      <div className="w-px bg-white/10"></div>
                    </div>

                    {/* COLUMN 2 BLOCK */}
                    <div className="flex space-x-8">
                      <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg pb-1 border-b border-white/10">
                          Semi-Mobile Crushing
                        </h3>

                        <ul className="space-y-1.5 text-sm">
                          <li><Link href="/products/semi-2stage-jj" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">II Stage – Jaw–Jaw</Link></li>
                          <li><Link href="/products/semi-2stage-jc" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">II Stage – Jaw–Cone</Link></li>
                          <li><Link href="/products/semi-3stage-jjv" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Jaw–Jaw–VSI</Link></li>
                          <li><Link href="/products/semi-3stage-jcv" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Jaw–Cone–VSI</Link></li>
                          <li><Link href="/products/semi-msand" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">M-Sand – VSI + Screen</Link></li>
                          <li><Link href="/products/semi-psand" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">P-Sand – VSI + Wash</Link></li>
                        </ul>
                      </div>

                      {/* DIVIDER */}
                      <div className="w-px bg-white/10"></div>
                    </div>

                    {/* COLUMN 3 BLOCK */}
                    <div className="flex space-x-8">
                      <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg pb-1 border-b border-white/10">
                          Wheel-Mounted Crushing
                        </h3>

                        <ul className="space-y-1.5 text-sm">
                          <li><Link href="/products/wheel-2stage" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">II Stage – Single Chassis</Link></li>
                          <li><Link href="/products/wheel-3stage-double" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Double Chassis</Link></li>
                          <li><Link href="/products/wheel-3stage-triple" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">III Stage – Triple Chassis</Link></li>
                          <li><Link href="/products/wheel-msand" className="block px-2 py-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:translate-x-1">M-Sand – VSI + Screen</Link></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {afterProductLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    pathname === link.href ? "text-white" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                <motion.span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormOpen(true)}
              className="ml-4 px-5 py-3 bg-blue-500 text-white hover:text-white font-semibold rounded-full shadow-md hover:bg-blue-600 transition-all"
            >
              Contact Now
            </motion.button>
          </ul>

          {/* MOBILE: hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-black/70 backdrop-blur-md border-t border-white/10 transition-all overflow-hidden ${
            menuOpen ? "max-h-[600px] py-4" : "max-h-0"
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
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* mobile products accordion */}
            <li>
              <button
                onClick={() => setMobileProductsOpen((s) => !s)}
                className={`flex items-center gap-1 text-lg transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-blue-400"
                    : "hover:text-blue-400"
                }`}
                aria-expanded={mobileProductsOpen}
              >
                Products
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    mobileProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileProductsOpen && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="ml-4 mt-3 space-y-3 overflow-hidden"
                  >
                    {products.map((product) => (
                      <li key={product.href}>
                        <Link
                          href={product.href}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileProductsOpen(false);
                          }}
                          className="text-base text-gray-300 hover:text-blue-400 transition-colors block"
                        >
                          {product.name}
                        </Link>

                        {product.subProducts && (
                          <ul className="ml-4 mt-2 space-y-2">
                            {product.subProducts.map((subProduct) => (
                              <li key={subProduct.href}>
                                <Link
                                  href={subProduct.href}
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setMobileProductsOpen(false);
                                  }}
                                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors block"
                                >
                                  {subProduct.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>

            {afterProductLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-colors ${
                    pathname === link.href
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.header>

      {/* CONTACT FORM MODAL */}
      <AnimatePresence>
        {formOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-100 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 relative border border-white/20"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFormOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
                aria-label="Close contact form"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-4 text-white">
                Get in Touch
              </h2>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-400 outline-none resize-none"
                ></textarea>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
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
