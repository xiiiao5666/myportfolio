'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DecoderText from '../components/DecoderText';
import '../styles/portfolio.css';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Muletuness',
    description:
      'Aplikasi e-commerce berbasis web yang mendemonstrasikan fitur login, katalog produk, dan checkout. Dikembangkan menggunakan PHP, MySql, JavaScript.',
    link: 'https://github.com/maulharun/muletuness',
    tech: ['PHP', 'MySql', 'JavaScript'],
    image: '/images/project_e-commerce.jpg',
  },
  {
    title: 'Sistem Informasi Perpustakaan',
    description:
      'Aplikasi dekstop berbasis pemrograman java untuk mengelola data buku, anggota, dan transaksi peminjaman dengan dashboard yang intuitif.',
    link: 'https://github.com/maulharun/perpustakaan_bchub',
    tech: ['Java', ' PLSQL'],
    image: '/images/project_java.jpg',
  },
  {
    title: 'MyPortfolio',
    description:
      'Website portofolio pribadi menampilkan profil, pendidikan, dan pengalaman. Dibuat dengan Next.js, Tailwind CSS, Firebase, dan Framer Motion.',
    link: 'https://github.com/maulharun/myportfolio',
    tech: ['NextJs', 'Tailwind', 'Framer-Motion', 'Firebase'],
    image: '/images/project_portfolio.jpg',
  },
  {
    title: "Sertifikat Hifdzil Qur'an 30 Juz",
    description:
      "Sertifikat hifdzil Qur'an 30 Juz dan sebagai bukti kelulusan saya dari Pondok Pesantren Al-Madinah Antapani Bandung",
    link: '#',
    tech: ['Hafalan'],
    image: '/images/sertifikat_30juz.jpg',
  },
  {
    title: "Sertifikat Haflah Hifdzil Qur'an 15 Juz",
    description:
      "Sertifikat haflah Qur'an 15 Juz dan sebagai bukti keaktifan saya Sebagai penerima beasiswa tahfidz di Universitas Ma'soem",
    link: '#',
    tech: ['Hafalan'],
    image: '/images/sertifikat_15juz.jpg',
  },
  {
    title: "Sertifikat Haflah Hifdzil Qur'an 5 Juz",
    description:
      "Sertifikat haflah Qur'an 5 Juz dan sebagai bukti keaktifan saya Sebagai penerima beasiswa tahfidz di Universitas Ma'soem",
    link: '#',
    tech: ['Hafalan'],
    image: '/images/sertifikat_5juz.jpg',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function PortfolioPage() {
  const [shuffleTitle, setShuffleTitle] = useState(false);

  return (
    <div className="portfolio">
      <motion.section
        className="text-center  mb-12 fade-in"
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setShuffleTitle(true)}
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h1>
          <DecoderText text="Portfolio" shouldShuffle={shuffleTitle} />
        </h1>
        <p className="text-lg">Berikut beberapa projek dan sertifikat yang telah saya selesaikan.</p>
      </motion.section>

      <motion.div
        className="portfolio-grid"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            whileHover={{ y: -4 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h2 className="portfolio-title">{project.title}</h2>
              <p className="portfolio-desc">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="tech-text"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-link inline-flex items-center"
              >
                Lihat Project <ExternalLink className="w-4 h-4 ml-7" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
