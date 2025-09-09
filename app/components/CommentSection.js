'use client';
import React, { useEffect, useState } from 'react';
import { database } from '../firebase_config';
import { ref, push, onValue } from 'firebase/database';
import '../styles/contact.css';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const commentsRef = ref(database, 'comments');
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data ? Object.values(data).reverse() : [];
      setComments(loaded);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !name) return;
    push(ref(database, 'comments'), {
      name,
      text,
      timestamp: Date.now()
    });
    setName('');
    setText('');
  };

  return (
    <div className='section-box'>
      <h2 className="section-title">Komentar</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nama"
          className="form-input"
          required
        />
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis komentar..."
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Kirim</button>
      </form>
      <div className="comment-list">
        {comments.map((c, i) => (
          <div key={i} className="comment">
            <p className="comment-name">{c.name}</p>
            <p className="comment-text">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
