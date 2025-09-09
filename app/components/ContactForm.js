'use client';
import React, { useState } from 'react';
import { database } from '../firebase_config';
import { ref, push } from 'firebase/database';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const feedback = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };
  
    // Kirim ke Firebase
    push(ref(database, 'contacts/'), feedback)
      .then(() => {
        // Kirim ke EmailJS
        emailjs.send(
          'service_fzriokn',
          'template_h8jr69f',
          {
            name: name,
            email: email,
            message: message,
          },
          'zRfATjKKU2tfH4U1x'
        ).then(
          () => {
            alert('Pesan berhasil dikirim!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error) => {
            console.error('Gagal mengirim email:', error);
            alert('Pesan ke email gagal dikirim.');
          }
        );
      })
      .catch((error) => {
        console.error('Gagal menyimpan ke Firebase:', error);
        alert('Terjadi kesalahan, coba lagi.');
      });
  };
  

  return (
    <div className='section-box'>
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="section-title">Masukan & Kritik</h2>

      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="form-input"
      />

      <input
        type="email"
        placeholder="Email kamu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="form-input"
      />

      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="form-input"
        placeholder="Tulis pesanmu..."
        rows="5"
        required
      ></textarea>

      <button type="submit" className="form-button">
        Kirim Pesan
      </button>
    </form>
    </div>
  );
}
