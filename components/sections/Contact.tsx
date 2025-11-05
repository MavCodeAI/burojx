'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, LocationIcon, SendIcon, CheckIcon } from '@/components/icons/CustomIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">hello@burojx.com</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                    <LocationIcon />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                  <motion.button
                    key={social}
                    className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white text-sm font-bold">
                      {social[0]}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 resize-none"
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : isSubmitted ? (
                  <>
                    <CheckIcon />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <SendIcon />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
