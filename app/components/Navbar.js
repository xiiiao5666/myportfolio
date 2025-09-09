'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Sun, Moon } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar-container ${scrolling ? 'scrolled' : ''}`}
    >
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">MyPortfolio</Link>

        <div className="navbar-menu">
          {navLinks.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200 }}>
              <Link href={item.href} className="navbar-link">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="theme-toggle-desktop">
          {mounted && (
            <button onClick={toggleTheme} className="theme-toggle-btn">
              {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          )}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="hamburger-btn">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu"
        >
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="mobile-menu-link"
              onClick={() => setIsOpen(false)} // close menu when clicking link
            >
              {item.name}
            </Link>
          ))}
          <div className="mobile-theme-toggle">
            {mounted && (
              <button onClick={toggleTheme} className="theme-toggle-btn">
                {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
              </button>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
