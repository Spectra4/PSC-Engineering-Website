"use client";

import { useState, useEffect } from "react";
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

  // *** ADDED FOR PRODUCT 4 HOVER ***
  const [hoverProduct4, setHoverProduct4] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const products = [
    { name: "Product 1", href: "/products/product-1" },
    { name: "Product 2", href: "/products/product-2" },
    { name: "Product 3", href: "/products/product-3" },
    {
      name: "Product 4",
      href: "/products/product-4",
      subProducts: [
        { name: "Sub Product 4.1", href: "/products/product-4/sub-1" },
        { name: "Sub Product 4.2", href: "/products/product-4/sub-2" },
      ],
    },
    { name: "Product 5", href: "/products/product-5" },
    { name: "Product 6", href: "/products/product-6" },
    { name: "Product 7", href: "/products/product-7" },
  ];

  const afterProductLinks = [{ name: "Contact", href: "/contact" }];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const openHandler = () => setFormOpen(true);
    window.addEventListener("openContactForm", openHandler);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openContactForm", openHandler);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-blue-300 backdrop-blur-lg shadow-lg border-b border-yellow-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
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

          <ul className="hidden md:flex items-center gap-10 text-black font-medium">
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
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* ======================= PRODUCTS DESKTOP MENU ======================= */}
            <li
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => {
                setProductsOpen(false);
                setHoverProduct4(false); // ★ ADDED
              }}
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
                  className={`transition-transform duration-300 ${
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
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-4 
                      bg-gray-100 backdrop-blur-xl
                      border border-yellow-500/30 
                      rounded-2xl shadow-2xl 
                      p-4 min-w-260px
                      space-y-1"
                  >
                    <ul className="py-2">
                      {products.map((product) => (
                        <li
                          key={product.href}
                          className="relative group/item"
                          // ★ ONLY FOR PRODUCT 4 → enable hover
                          onMouseEnter={() =>
                            product.name === "Product 4" &&
                            setHoverProduct4(true)
                          }
                          onMouseLeave={() =>
                            product.name === "Product 4" &&
                            setHoverProduct4(false)
                          }
                        >
                          <Link
                            href={product.href}
                            className="block px-6 py-2.5 text-black hover:text-white hover:bg-gray-800/50 transition-all whitespace-nowrap"
                          >
                            {product.name}
                          </Link>

                          {/* ================= SUB-PRODUCTS ON HOVER (ONLY PRODUCT 4) ================= */}
                          {product.subProducts && (
                            <AnimatePresence>
                              {hoverProduct4 && product.name === "Product 4" && (
                                <motion.div
                                  initial={{ opacity: 0, x: 14 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 14 }}
                                  transition={{ duration: 0.25, ease: "easeOut" }}
                                  className="absolute left-full top-0 ml-3 
                                    w-45 bg-gray-100 
                                    backdrop-blur-xl 
                                    border border-yellow-500/30 
                                    rounded-2xl shadow-2xl 
                                    p-3 space-y-1"
                                >
                                  <ul className="py-2">
                                    {product.subProducts.map((sub) => (
                                      <li key={sub.href}>
                                        <Link
                                          href={sub.href}
                                          className="block px-4 py-2.5 text-black hover:text-white hover:bg-gray-800/50 transition-all whitespace-nowrap"
                                        >
                                          {sub.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* ======================= AFTER PRODUCTS LINKS ======================= */}
            {afterProductLinks.map((link) => (
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
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            ))}

            {/* CONTACT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFormOpen(true)}
              className="ml-4 px-5 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 hover:shadow-yellow-400/30 transition-all"
            >
              Contact Now
            </motion.button>
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden bg-gray-900/95 backdrop-blur-md border-t border-yellow-500/10 transition-all overflow-hidden ${
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
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* MOBILE PRODUCT DROPDOWN */}
            <li>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`flex items-center gap-1 text-lg transition-colors ${
                  pathname.startsWith("/products")
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
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
                    transition={{ duration: 0.3 }}
                    className="ml-4 mt-3 space-y-3 overflow-hidden"
                  >
                    {products.map((product) => (
                      <li key={product.href}>
                        <Link
                          href={product.href}
                          onClick={() => setMenuOpen(false)}
                          className="text-base text-gray-400 hover:text-yellow-400 transition-colors block"
                        >
                          {product.name}
                        </Link>

                        {product.subProducts && (
                          <ul className="ml-4 mt-2 space-y-2">
                            {product.subProducts.map((subProduct) => (
                              <li key={subProduct.href}>
                                <Link
                                  href={subProduct.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-sm text-gray-500 hover:text-yellow-400 transition-colors block"
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

            {/* AFTER PRODUCT LINKS MOBILE */}
            {afterProductLinks.map((link) => (
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

            <li>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setFormOpen(true);
                  setMenuOpen(false);
                }}
                className="w-full px-5 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition-all"
              >
                Contact Now
              </motion.button>
            </li>
          </ul>
        </motion.div>
      </motion.header>

      {/* ================= CONTACT FORM MODAL ================= */}
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
              className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 relative border border-yellow-500/30"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
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
