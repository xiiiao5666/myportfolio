'use client';
import React from 'react';
import { MessageSquare } from 'lucide-react';
import '../styles/chatbot.css';

export default function ChatBubble({ onClick }) {
  return (
    <button className="chatbot-bubble" onClick={onClick}>
      <MessageSquare size={25} />
    </button>
  );
}
