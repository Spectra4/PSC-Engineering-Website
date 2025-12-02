"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "", // Added subject field for better communication
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Define the futuristic color variables
  const primaryText = "text-cyan-400";
  const primaryGlow = "shadow-[0_0_40px_rgba(59,130,246,0.2)]";
  const primaryGradientText = "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission success after a delay
    setTimeout(() => {
      setIsSubmitting(false);
      
      // SHOW CUSTOM SUCCESS MODAL INSTEAD OF alert()
      setShowSuccessModal(true);

      // Clear the form (optional, often kept for user to see sent message)
      // setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  // Custom Success Modal Component
  const SuccessModal = () => (
    <AnimatePresence>
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-[9999] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, y: -50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            className="bg-gray-800 p-8 rounded-xl max-w-sm w-full text-center border border-cyan-500/50 shadow-2xl shadow-cyan-900/50"
          >
            <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Inquiry Sent!</h3>
            <p className="text-gray-400 mb-6">
              Thank you, {form.name}. We have received your message and will respond within 24 hours.
            </p>
            <button
              onClick={() => {
                setShowSuccessModal(false);
                // Clear form only after user acknowledges success
                setForm({ name: "", email: "", subject: "", message: "" }); 
              }}
              className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <SuccessModal />
      <section id="contact" className="relative min-h-screen text-white py-28 overflow-hidden">
        {/* Background Mesh/Grid Effect */}
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgdmlld0JveD0nMCAwIDYgNic+PHBhdGggZmlsbD0nI2U1ZTdlJzBkPSdNMCAwTDYgMFYxSDB6TTYgNUg1VjZIMHptMi0ySDNWNFYySDR6TTAgNUgyVjZIMHptNi0zSDR2Mkg2ek0wIDJIMlYzSDB6TTMgMEg2VjFIM3pNMzQ0VjJoMVYySDN6TTUgMEg2VjJoMVYzeE0xIDBIN1YzTDF6TTQgNEg3VjdIMTR6TTIgMEg3TDR6TTEgNUg3TDR6TTQgNUg3TDR6TTcgNUgxM1Y4TDF6TTQgMEg3TDR6TTEgNUg3TDR6TTQgNUg3TDR6TTIgMGg2djFoNXY0aDJ2MWg2di03aDF2LTNIMFYzeTNNIDUgN0w5IDdWMTRIN3YtN3pNNyAzSDE0VjdIMTd2M0g2eiIvPjwvc3ZnPg==')] transform scale-150 rotate-45 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Info Panel (Refined Style) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gray-900/60 border border-blue-800/50 h-full"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">
              Let's Engineer Your <span className={primaryGradientText}>Next Project</span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-lg border-l-4 border-cyan-500/50 pl-4 italic">
              Our specialists are ready to discuss your specific aggregate production needs, site requirements, and modular plant configurations.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <Phone className={`w-6 h-6 ${primaryText} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-white">Sales & Inquiry Hotline</h4>
                  <span className="text-gray-300 text-lg">+91 98765 43210 / +91 99000 11223</span>
                </div>
              </div>
              
              {/* Mail */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <Mail className={`w-6 h-6 ${primaryText} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-white">Technical Support & General Mail</h4>
                  <span className="text-gray-300 text-lg break-all">support@patelcrusher.com</span>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <MapPin className={`w-6 h-6 ${primaryText} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-white">Headquarters & Manufacturing Plant</h4>
                  <span className="text-gray-300 text-lg">
                    Gat No. 1234, Bhosari Industrial Area, Pune, Maharashtra, India - 411039
                  </span>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700/50">
                <Clock className={`w-6 h-6 ${primaryText} mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="font-semibold text-white">Working Hours (IST)</h4>
                  <span className="text-gray-300 text-lg">Monday - Saturday: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Panel (High-Tech Form) */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`bg-gray-800/80 backdrop-blur-xl border border-blue-700/50 rounded-2xl p-8 shadow-2xl space-y-6 relative overflow-hidden ${primaryGlow}`}
          >
            <h3 className="text-3xl font-bold text-white mb-4">Request a Consultation</h3>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Full Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name / Company Contact"
                value={form.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-900/70 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Business Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="project@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-900/70 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
                required
              />
            </div>
            
            {/* Subject (New Field) */}
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-300 mb-1">Subject / Project Type</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="e.g., Modular Jaw Crusher Inquiry"
                value={form.subject}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-gray-900/70 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder-gray-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Detailed Requirements</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please describe your required throughput, material, and site location."
                value={form.message}
                onChange={handleChange}
                className="w-full h-36 p-4 rounded-xl bg-gray-900/70 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder-gray-500"
                required
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full text-white font-semibold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Submit Consultation Request
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}