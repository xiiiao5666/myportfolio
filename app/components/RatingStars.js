'use client';
import React, { useEffect, useState } from 'react';
import { ref, push, onValue } from 'firebase/database';
import { database } from '../firebase_config';
import { FaStar } from 'react-icons/fa';
import '../styles/contact.css';

export default function RatingStars() {
  const [selected, setSelected] = useState(0);
  const [name, setName] = useState('');
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const ratingsRef = ref(database, 'ratings');
    onValue(ratingsRef, (snapshot) => {
      const data = snapshot.val();
      const loaded = data ? Object.values(data).reverse() : [];
      setRatings(loaded);
    });
  }, []);

  const [hovered, setHovered] = useState(0);


  const handleRate = (rate) => {
    if (!name) return alert('Masukkan nama terlebih dahulu!');
    setSelected(rate);
    push(ref(database, 'ratings'), {
      name,
      rating: rate,
      timestamp: Date.now()
    })
      .then(() => {
        setName('');
        setSelected(0);
      })
      .catch(() => {
        alert('Gagal menyimpan rating!');
      });
  };

  return (
    <div className="rating-box">
      <h2 className="section-title">Beri Rating</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nama"
        className="form-input mb-4"
      />

      <div className="rating-stars">
        {[1, 2, 3, 4, 5].map((n) => (
          <FaStar
  key={n}
  onClick={() => handleRate(n)}
  onMouseEnter={() => setHovered(n)}
  onMouseLeave={() => setHovered(0)}
  className={`star-icon ${
    (hovered >= n || selected >= n) ? 'star-active' : ''
  }`}
/>
        ))}
      </div>

      <div className="rating-list">
        <h3 className="font-semibold text-lg mb-2">Rating dari Pengunjung:</h3>
        {ratings.map((r, i) => (
          <div key={i} className="comment-card">
            <p className="rating-name">{r.name}</p>
            <div className="fa-star">
                {[...Array(r.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
