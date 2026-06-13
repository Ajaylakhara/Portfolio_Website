import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertTriangle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDark = false }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id_here" ||
      templateId === "your_template_id_here" ||
      publicKey === "your_public_key_here"
    ) {
      console.warn("EmailJS credentials are not configured. Falling back to simulation mode.");
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }, 1500);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        (response) => {
          console.log("EmailJS SUCCESS!", response.status, response.text);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS FAILED...", error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="pt-24 pb-10 relative overflow-hidden bg-white transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-2xl mx-auto space-y-6"
        >
          <span className="text-xs uppercase tracking-widest text-[#FF6321] font-bold bg-[#FF6321]/10 px-3 py-1.5 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#111827] tracking-tight leading-tight pt-2">
            Let’s build something <span className="text-[#FF6321]">amazing</span> together
          </h2>

          {/* Visible Email */}
          <div className="pt-4">
            <a
              href="mailto:ajaylakhara748@gmail.com"
              className="inline-flex items-center gap-3 text-lg md:text-2xl font-bold text-[#111827] hover:text-[#FF6321] transition-colors duration-300 group"
            >
              <Mail className="text-[#FF6321] group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="relative">
                ajaylakhara748@gmail.com
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FF6321] group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>

          {/* Centered Social Row with hover transitions */}
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/Ajaylakhara"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:rotate-3 hover:text-white hover:bg-[#FF6321] hover:border-transparent hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ajay-lakhara-9159b0190/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-rotate-3 hover:text-white hover:bg-[#FF6321] hover:border-transparent hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-xl mx-auto bg-white border border-gray-100/80 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/40 relative"
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center space-y-4"
            >
              <CheckCircle className="mx-auto text-emerald-500 mb-2 animate-bounce" size={56} />
              <h3 className="text-2xl font-black text-[#111827]">Message Sent!</h3>
              <p className="text-gray-600 max-w-sm mx-auto">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-[#FF6321] hover:text-[#e05d00] font-bold text-sm transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Your Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-gray-50/50 border border-gray-200/80 rounded-xl px-5 py-4 focus:border-[#FF6321] focus:ring-1 focus:ring-[#FF6321] outline-none transition-all duration-300 text-gray-800"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Your Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50/50 border border-gray-200/80 rounded-xl px-5 py-4 focus:border-[#FF6321] focus:ring-1 focus:ring-[#FF6321] outline-none transition-all duration-300 text-gray-800"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold ml-1">Your Message</label>
                <textarea
                  required
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50/50 border border-gray-200/80 rounded-xl px-5 py-4 focus:border-[#FF6321] focus:ring-1 focus:ring-[#FF6321] outline-none transition-all duration-300 resize-none text-gray-800"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertTriangle size={14} />
                  <span>Failed to send message. Please check connection or try again.</span>
                </div>
              )}

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full py-4.5 bg-[#FF6321] hover:bg-[#e05d00] hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FF6321]/20 cursor-pointer text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;