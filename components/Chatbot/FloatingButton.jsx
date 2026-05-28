"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingButton({ isOpen, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/50 hover:bg-blue-500 transition-colors focus:outline-none cursor-pointer p-0"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute flex items-center justify-center"
      >
        <MessageCircle size={26} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{ rotate: isOpen ? 0 : -90, scale: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute flex items-center justify-center"
      >
        <X size={26} />
      </motion.div>

      {!isOpen && (
        <span className="absolute w-full h-full rounded-full border border-blue-400 animate-ping opacity-75"></span>
      )}
    </motion.button>
  );
}
