import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertTriangle } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback if environment variables are not configured yet
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
    <div className="pt-32 pb-20">
      <section className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
            Get in <span className="text-accent">touch.</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <CheckCircle className="mx-auto text-accent mb-6" size={64} />
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-gray-400 mb-8">Thank you for reaching out. I'll get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="text-accent hover:underline cursor-pointer font-semibold"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold ml-1">Message</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-white/10 rounded-xl px-5 py-4 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                ></textarea>
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                  <AlertTriangle size={16} />
                  <span>Failed to send message. Please check connection or try again.</span>
                </div>
              )}

              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full py-5 bg-accent text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-accent-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-accent/20 border-glow cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
