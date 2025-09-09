'use client';
import React from 'react';
import ContactForm from '../components/ContactForm';
import CommentSection from '../components/CommentSection';
import RatingStars from '../components/RatingStars';
import '../styles/contact.css';

export default function ContactPage() {
  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <h1>Hubungi Saya</h1>
        <p>Sampaikan masukan, komentar, atau berikan penilaianmu terhadap portofolio ini.</p>
      </section>

      <div className="max-w-3xl mx-auto">
        <div className="contact-box">
          <ContactForm />
        </div>
        <div className="contact-box">
          <CommentSection />
        </div>
        <div className="contact-box">
          <RatingStars />
        </div>
      </div>
    </div>
  );
}
