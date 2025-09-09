'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../styles/about.css';
import DecoderText from '../components/DecoderText';

export default function AboutPage() {
  const [shuffleTentang, setShuffleTentang] = useState(false);
  const [shufflePendidikan, setShufflePendidikan] = useState(false);
  const [shufflePengalaman, setShufflePengalaman] = useState(false);

  return (
    <div className="about-gradient-bg">
  {/* Profil Section */}
  <motion.section
  className="about-hero"
  initial={{ opacity: 0, y: 30 }}
  whileInView={() => {
    setShuffleTentang(true);
    return { opacity: 1, y: 0 };
  }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <div className="about-hero-content">
    <div className="about-hero-image">
      <Image
        src="/images/profile.jpg"
        alt="Foto Profil"
        width={360}
        height={360}
      />
    </div>
    <div className="about-hero-text">
      <h2>
        <DecoderText text="Doni Rizki Maulana" shouldShuffle={shuffleTentang} />
      </h2>
      <p>
        Saya adalah mahasiswa Sistem Informasi di Universitas Ma&#39;soem, lahir tahun 2003 di Bandung,
        dan saat ini tinggal di Desa Tegalluar Kec.Bojongsoang, Kabupaten Bandung. Saya memiliki 
        ketertarikan dalam pengembangan website, serta hobi membaca, bermain game, dan mendengarkan musik.
      </p>
    </div>
  </div>
</motion.section>

      {/* Timeline Pendidikan */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, x: -60 }}
        whileInView={() => {
          setShufflePendidikan(true);
          return { opacity: 1, x: 0 };
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="timeline-header">
          <DecoderText text="Pendidikan" shouldShuffle={shufflePendidikan} />
        </h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3 className="timeline-title">Universitas Ma&#39;soem</h3>
              <p className="timeline-year">2023 - Sekarang</p>
              <p className="timeline-desc">Program Studi Sarjana Sistem Informasi, Fakultas Komputer.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3 className="timeline-title">Pondok Pesantren Al-Madinah Antapani Bandung</h3>
              <p className="timeline-year">2016 - 2023</p>
              <p className="timeline-desc">Pondok Pesantren Tahfidzul Qur&#39;an, diiringi pendidikan kesetaraan SMP dan SMA.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3 className="timeline-title">SDN Negeri Sapan 02</h3>
              <p className="timeline-year">2010 - 2016</p>
              <p className="timeline-desc">Memulai pendidikan di Sekolah Dasar SDN Sapan 02.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pengalaman Pribadi */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={() => {
          setShufflePengalaman(true);
          return { opacity: 1, y: 0 };
        }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
      <div className="experience-section">
        <h2 className="timeline-header">
          <DecoderText text="Pengalaman" shouldShuffle={shufflePengalaman} />
        </h2>

      <div className="experience-cards">
        <div className="experience-card">
          Anggota Aktif Himpunan Mahasiswa Fakultas Komputer Universitas Ma&#39;soem
        </div>
        <div className="experience-card">
          Pengabdian dan Penanggung Jawab Khalaqah Qur&#39;an di Pondok Pesantren Al-Madinah Antapani Bandung
        </div>
        <div className="experience-card">
         Penanggung Jawab Khalaqah Qur&#39;an di Pondok Pesantren Darul Mukhlasin Bandung
        </div>
      </div>
      </div>
      </motion.section>
    </div>
  );
}
