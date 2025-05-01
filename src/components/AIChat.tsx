import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { RiSendPlane2Fill } from "react-icons/ri";
import { AiOutlineLoading } from "react-icons/ai";
import { useChatAI } from '../hooks/useChatAI';

interface Message {
  id: number;
  sender: 'user' | 'bot';
  text: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      sender: 'bot',
      text: 'You can talk to me to learn more about me!',
    },
  ]);
  const [input, setInput] = useState('');
  const {
    sendMessage,
    loading,
  } = useChatAI();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userInput = input.trim();
    setInput('');

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: userInput,
    };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const reply = await sendMessage(userInput);
      const botMessage: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: reply || 'Sorry, I didn’t catch that.',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      const errorMsg: Message = {
        id: Date.now() + 2,
        sender: 'bot',
        text: 'Oops! Something went wrong.',
      };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-12 right-6 z-50 rounded-full bg-black p-4 text-white shadow-lg hover:bg-black/90 focus:outline-none"
      >
        <IoChatbubblesOutline size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          ref={chatRef}
          className="fixed bottom-28 right-6 z-40 w-80 h-96 rounded-xl bg-white shadow-2xl flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-800 space-y-2">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg w-fit ${
                    msg.sender === 'user'
                      ? 'bg-blue-100 text-right'
                      : 'bg-gray-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="px-3 py-2 rounded-lg w-fit bg-gray-100">
                <AiOutlineLoading className="animate-spin" size={20} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Shoot your questions"
              className="flex-1 rounded-md border px-3 py-2 text-sm focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="p-1 px-2 text-sm text-black rounded-full hover:bg-black/20"
            >
              <RiSendPlane2Fill size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AIChat;
