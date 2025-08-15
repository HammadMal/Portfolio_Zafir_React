import React, { useState, useRef } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_2gnqpji",  // Your service ID
        "template_swghvc6", // Your template ID
        form.current,
        "-YI9gtyMonMW4acLf" // Your public key
      )
      .then(
        (result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          setSubmitStatus('error');
          setIsSubmitting(false);
          // Clear error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Let's <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out to me! Whether you have a project in mind, want to collaborate, or just want to say hi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-amber-400 transition-colors">
                    muhammadzafir248@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+923001234567" className="text-white hover:text-amber-400 transition-colors">
                    +92 309 1229572                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/MuhammadZafir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-amber-400" />
                </a>
                <a 
                  href="https://linkedin.com/in/mzafirr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-amber-500/20 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-amber-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form with EmailJS */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows="5"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>An error occurred. Please try again or email me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                    : 'bg-gradient-to-r from-amber-600 to-amber-500 text-black hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-500/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;