'use client'

import { Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  const message = "Hi, I visited your portfolio and I'm interested in your services. Can we discuss further?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/923237884167?text=${encodedMessage}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-green-400 to-green-500 shadow-lg flex items-center justify-center text-white hover:shadow-glow-green transition-all duration-300 group"
      aria-label="WhatsApp Chat"
    >
      <Send size={24} className="group-hover:scale-110 transition-transform" />
    </motion.a>
  )
}
