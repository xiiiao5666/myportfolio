'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import DecoderText from './components/DecoderText';
import './styles/homepage.css'; 
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const fadeInUpSmooth = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: 'easeInOut', delay: 0.3 } // Tambah delay & durasi lebih panjang
  }
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const HomePage = () => {
  const [shouldShuffleHero, setShouldShuffleHero] = useState(false);
  const [shouldShuffleAbout, setShouldShuffleAbout] = useState(false);
  const [showDecoderHero, setShowDecoderHero] = useState(false);
  
  useEffect(() => {
    if (shouldShuffleHero) {
      const timeout = setTimeout(() => {
        setShowDecoderHero(true);
      }, 800); // ⏱️ delay agar animasi fade selesai dulu
      return () => clearTimeout(timeout);
    }
  }, [shouldShuffleHero]);


  return (
    <div className="home-page">
      <Navbar />

      {/* Hero Section */}
        <div className="hero-gradient"></div>
        <motion.section 
        className="hero"
        initial="hidden"
        whileInView="visible"  // Animasi berjalan setiap masuk viewport
        variants={fadeInUpSmooth}
        onViewportEnter={() => setShouldShuffleHero(true)}
      >
        <div className="hero-content">
    {/* Animasi hanya pada teks */}
    <motion.h1 
      className="hero-myname"
      variants={fadeInUpSmooth}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <DecoderText text="Doni Rizki Maulana" shouldShuffle={showDecoderHero} />
    </motion.h1>

    <motion.h1 
      className="hero-title"
      variants={fadeInUpSmooth}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      Welcome to My Portfolio <span className="_line_x8c4c_183" data-status="entered"></span>
    </motion.h1>

    <motion.p 
      className="hero-subtitle" 
      whileHover={{ scale: 1.05 }}
      variants={fadeInUpSmooth}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      Hanya Seorang Pemula Dalam Dunia Website.
    </motion.p>
  </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="about section-content"
        initial="hidden"
        whileInView="visible"  // Animasi berulang setiap discroll
        viewport={{ once: false, amount: 0.5 }} // Aktif setiap kali elemen masuk viewport
        variants={fadeInUpSmooth}
        onViewportEnter={() => setShouldShuffleAbout(true)}
      >
        <div className="about-container">
          <div className="about-text">
            <h2>
              <DecoderText text="Tentang Saya" shouldShuffle={shouldShuffleAbout} />
            </h2>
            <p>
            Halo, saya Doni Rizki Maulana, seorang mahasiswa semester 4 program studi Sistem Informasi
            di Universitas Ma&#39;soem. Saya memiliki minat yang besar dalam pengembangan website dan
            teknologi web.
            </p>
            <p>
            Di waktu luang, saya suka membaca, bermain video game, dan mendengarkan musik. Oh, ya!
            saya sangat menyukai kopi dan makanan manis.
            </p>
            </div>
            <motion.div
            className="about-image"
            variants={scaleUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
          >
            <Image
             src="/images/profile.jpg" 
             alt="Doni Rizki Maulana" 
             width={320} height={360} 
             className="rounded-lg" />
          </motion.div>
        </div>
      </motion.section>


    </div>
    );
    };

export default HomePage;
