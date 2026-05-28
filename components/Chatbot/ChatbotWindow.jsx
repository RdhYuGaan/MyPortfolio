"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Download, Trash2, Bot } from 'lucide-react';

export default function ChatbotWindow({ messages, onClose, onSendMessage, setMessages }) {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    "What are your skills?",
    "Show me your projects",
    "What is your experience?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setIsTyping(true);
    onSendMessage(input.trim());
    setInput('');
    setTimeout(() => setIsTyping(false), 900);
  };

  const handleQuickQuestion = (q) => {
    setIsTyping(true);
    onSendMessage(q);
    setTimeout(() => setIsTyping(false), 900);
  };

  const clearChat = () => {
    setMessages([
      { id: 1, text: "Hi! I’m Radith’s portfolio assistant. Ask me about projects, research, skills, or experience.", sender: "bot", timestamp: new Date().toISOString() }
    ]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-[calc(100vw-2rem)] sm:w-[380px] flex flex-col bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-2xl rounded-2xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
        <div className="flex items-center space-x-3">
          <div className="p-1.5 bg-white/20 rounded-full shadow-inner">
            <Bot size={22} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide">Assistant</h3>
            <span className="text-[10px] text-blue-100 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5 animate-pulse shadow-[0_0_5px_#4ade80]"></span>
              Online
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-1.5">
          <button 
            onClick={() => window.open('/Radith_CV.pdf', '_blank')}
            className="p-1.5 text-white hover:bg-white/20 rounded-md transition-colors"
            title="Download CV"
          >
            <Download size={16} />
          </button>
          <button 
            onClick={clearChat}
            className="p-1.5 text-white hover:bg-white/20 rounded-md transition-colors"
            title="Clear Chat"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Messages Window */}
      <div className="flex-1 h-[60vh] sm:h-[400px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-blue-500/50 scrollbar-track-transparent">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
            <motion.div 
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[85%] px-3.5 py-2.5 rounded-xl text-[14px] shadow-sm leading-relaxed ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-sm' 
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700/50 rounded-tl-sm'
              }`}
            >
              {msg.text.split('\n').map((line, i) => <p key={i} className="min-h-[1em]">{line}</p>)}
            </motion.div>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 px-1 font-medium">
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start">
            <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-xl rounded-tl-sm border border-gray-100 dark:border-gray-700/50 shadow-sm flex items-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions */}
      {messages.length <= 2 && (
        <div className="px-4 py-2 pb-3 flex flex-wrap gap-2 text-xs">
          {quickQuestions.map((q, i) => (
            <button
              key={i}
              onClick={() => handleQuickQuestion(q)}
              className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700/50 rounded-full transition-colors whitespace-nowrap shadow-sm"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="p-3 bg-white/50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700/50 backdrop-blur-md">
        <div className="flex items-center space-x-2 relative w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full pl-4 pr-11 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-inner transition-all w-full"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="absolute right-1 top-1 h-[34px] w-[34px] bg-blue-600 hover:bg-blue-500 disabled:bg-blue-300 disabled:dark:bg-blue-800 disabled:opacity-50 text-white rounded-full transition-colors flex items-center justify-center shadow-md shadow-blue-500/20"
          >
            <Send size={15} className={input.trim() && !isTyping ? "translate-x-[1px] -translate-y-[1px] transition-transform" : ""} />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
