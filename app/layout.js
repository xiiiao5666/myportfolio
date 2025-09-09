// app/layout.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import './styles/globals.css';
import './styles/theme.css';

const Layout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
        <ChatBot/>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
