import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path || (path === '/projects' && location.pathname.startsWith('/project/'));
    return `hover:opacity-60 transition-opacity ${isActive ? 'text-white' : 'text-neutral-400'}`;
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-40 px-6 py-6 mix-blend-difference flex justify-between items-center bg-background/50 backdrop-blur-md border-b border-neutral-900/50"
    >
      <Link to="/" className="text-xl font-heading font-bold uppercase tracking-widest cursor-pointer text-white">
        wαspᴇl.py
      </Link>
      <div className="flex gap-6 md:gap-8 text-xs md:text-sm tracking-wide font-medium font-heading">
        <Link to="/" className={getLinkClass('/')}>Главная</Link>
        <Link to="/projects" className={getLinkClass('/projects')}>Проекты</Link>
        <Link to="/contact" className={getLinkClass('/contact')}>Услуги & Связь</Link>
      </div>
    </motion.nav>
  );
}
