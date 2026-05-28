"use client";
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingButton from './FloatingButton';
import ChatbotWindow from './ChatbotWindow';
import { getChatbotResponse } from '../../lib/chatbotLogic';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  
  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('chatbot_messages');
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      setMessages([
        { id: 1, text: "Hi! I’m Radith’s portfolio assistant. Ask me about projects, research, skills, or experience.", sender: "bot", timestamp: new Date().toISOString() }
      ]);
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('chatbot_messages', JSON.stringify(messages));
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    const userMsg = { id: Date.now(), text, sender: "user", timestamp: new Date().toISOString() };
    setMessages(prev => [...prev, userMsg]);
    
    // Simulate thinking/typing
    setTimeout(() => {
      const responseText = getChatbotResponse(text);
      const botMsg = { id: Date.now() + 1, text: responseText, sender: "bot", timestamp: new Date().toISOString() };
      setMessages(prev => [...prev, botMsg]);
    }, 600 + Math.random() * 400); // 600 - 1000ms delay
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none w-full max-w-[calc(100vw-2rem)] sm:max-w-none">
      <div className="pointer-events-auto w-full sm:w-auto flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <ChatbotWindow 
              messages={messages} 
              onClose={() => setIsOpen(false)} 
              onSendMessage={handleSendMessage}
              setMessages={setMessages}
            />
          )}
        </AnimatePresence>
        
        <div className="flex justify-end mt-3 sm:mt-4">
          <FloatingButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </div>
  );
}
