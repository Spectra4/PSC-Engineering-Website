"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent successfully!\n\nName: ${form.name}\nEmail: ${form.email}`);
    setForm({ name: "", email: "", date: "", message: "" });
  };

  return (
    <section className="relative min-h-screen text-white py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Get in <span className="text-yellow-500">Touch</span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have questions about our crushing equipment or plant solutions?  
            Our experts are here to help you choose the right system for your project.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-yellow-500" />{" "}
              <span className="text-gray-200">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yellow-500" />{" "}
              <span className="text-gray-200">info@crushtechindustries.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-yellow-500" />{" "}
              <span className="text-gray-200">
                Industrial Zone, Pune, Maharashtra, India
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-yellow-500" />{" "}
              <span className="text-gray-200">Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Right Form Panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl space-y-6 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent pointer-events-none"></div>

          {/* Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Preferred Date & Time</label>
            <input
              type="datetime-local"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              placeholder="Write your message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full h-32 p-3 rounded-lg bg-gray-900/60 border border-gray-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all resize-none"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-yellow-500/30"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
