'use client';
import React, { useState } from 'react';
import { SendHorizonal } from 'lucide-react';
import '../styles/chatbot.css';

export default function ChatWindow({ onClose }) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Halo! Ada yang bisa saya bantu hari ini?' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages([...newMessages, { from: 'bot', text: data.reply }]);
    } catch (error) {
      setMessages([...newMessages, { from: 'bot', text: 'Terjadi kesalahan, coba lagi nanti.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>Chat AI</span>
        <button onClick={onClose}>×</button>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">Sedang mengetik...</div>}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Tulis pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>
          <SendHorizonal size={20} />
        </button>
      </div>
    </div>
  );
}
