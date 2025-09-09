'use client';
import React, { useState } from 'react';
import ChatBubble from './ChatBubble';
import ChatWindow from './ChatWindow';

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ChatBubble onClick={() => setOpen(true)} />
      {open && <ChatWindow onClose={() => setOpen(false)} />}
    </>
  );
}
