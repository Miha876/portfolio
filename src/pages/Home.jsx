import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full text-center">
        <div className="overflow-hidden mb-4">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold uppercase leading-none tracking-normal"
          >
            wαspᴇl.py
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold uppercase leading-none tracking-wide text-transparent mt-4"
            style={{ WebkitTextStroke: "1px white" }}
          >
            Python Developer
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-lg md:text-xl text-neutral-400 max-w-lg mx-auto font-body"
        >
          Разработка ботов, сайтов и парсеров. <br />
          <span className="text-white mt-2 inline-block">#vibecode 𖣴</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link to="/projects" className="font-heading uppercase tracking-widest text-xs font-bold border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors flex items-center gap-2">
            Смотреть работы <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="font-heading uppercase tracking-widest text-xs font-bold px-8 py-4 text-neutral-400 hover:text-white transition-colors">
            Связаться
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
