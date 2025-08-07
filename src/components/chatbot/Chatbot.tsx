import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Mic, MapPin } from 'lucide-react';
export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{
    text: string;
    isUser: boolean;
  }[]>([{
    text: 'Hi there! How can I help you find resources today?',
    isUser: false
  }]);
  const [inputValue, setInputValue] = useState('');
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    // Add user message
    setMessages([...messages, {
      text: inputValue,
      isUser: true
    }]);
    // Simulate bot response
    setTimeout(() => {
      let botResponse = "I'm searching for resources based on your request. Can you tell me more about what you need?";
      // Simple keyword matching for demo purposes
      if (inputValue.toLowerCase().includes('food') || inputValue.toLowerCase().includes('hungry')) {
        botResponse = 'I found 3 food banks near you. Would you like me to show them on the map?';
      } else if (inputValue.toLowerCase().includes('legal') || inputValue.toLowerCase().includes('lawyer')) {
        botResponse = 'There are 2 legal aid clinics within 5 miles of your location. Should I display them on the map?';
      } else if (inputValue.toLowerCase().includes('housing') || inputValue.toLowerCase().includes('homeless')) {
        botResponse = "I've located emergency housing services in your area. Would you like directions to the nearest one?";
      }
      setMessages(prev => [...prev, {
        text: botResponse,
        isUser: false
      }]);
    }, 1000);
    setInputValue('');
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  return <>
      {/* Chatbot Button */}
      <motion.button initial={{
      scale: 0,
      opacity: 0
    }} animate={{
      scale: 1,
      opacity: 1
    }} whileHover={{
      scale: 1.1
    }} whileTap={{
      scale: 0.9
    }} className="fixed bottom-6 right-6 bg-indigo-600 text-white rounded-full p-4 shadow-lg z-50" onClick={() => setIsOpen(!isOpen)} aria-label="Open chatbot">
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
      {/* Chatbot Panel */}
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.9
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300
      }} className="fixed bottom-24 right-6 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden z-50">
            {/* Header */}
            <div className="bg-indigo-600 text-white p-4">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-2 mr-3">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Resource Navigator</h3>
                  <p className="text-xs text-indigo-100">
                    Online | Ask me for help
                  </p>
                </div>
              </div>
            </div>
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => <div key={index} className={`mb-3 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl max-w-[80%] ${message.isUser ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white dark:bg-gray-700 shadow-sm rounded-bl-none'}`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>)}
            </div>
            {/* Map Preview (would be integrated with actual map) */}
            <div className="bg-gray-200 dark:bg-gray-700 p-2 flex items-center justify-between">
              <div className="flex items-center">
                <MapPin className="text-indigo-600 dark:text-indigo-400 mr-2" size={16} />
                <span className="text-xs font-medium">Map Preview</span>
              </div>
              <button className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                View Full Map
              </button>
            </div>
            <div className="h-32 bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Map would display here
              </p>
            </div>
            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex">
              <button className="p-2 rounded-full text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400" aria-label="Voice input">
                <Mic size={20} />
              </button>
              <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyPress={handleKeyPress} placeholder="Ask for resources or directions..." className="flex-grow px-3 py-2 focus:outline-none bg-transparent" />
              <button onClick={handleSendMessage} disabled={inputValue.trim() === ''} className={`p-2 rounded-full ${inputValue.trim() === '' ? 'text-gray-400' : 'text-indigo-600 dark:text-indigo-400'}`} aria-label="Send message">
                <Send size={20} />
              </button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </>;
}