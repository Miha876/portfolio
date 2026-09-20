import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 px-6 bg-neutral-950 text-neutral-200 flex flex-col"
    >
      <div className="max-w-4xl mx-auto w-full flex-1">
        <h1 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-normal mb-12">Услуги & Связь</h1>
        
        <div className="text-xl md:text-2xl font-heading font-light leading-relaxed mb-16 text-neutral-400">
          <span className="text-white font-medium">Могу разработать</span> для вас сайт под ключ, 
          написать Telegram-бота, создать парсер данных или проги на Python. <br /><br />
          <span className="text-neutral-500 text-lg uppercase tracking-widest text-xs font-bold block mb-2">Немного обо мне:</span>
          <span className="text-white font-medium">15 y.o.</span> | Челябинск <br />
          web coder → python developer. <br />
          Пишу код с 11–12 лет.
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-16 font-heading">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Backend</h4>
            <ul className="text-neutral-500 space-y-2 text-sm font-medium">
              <li>Python</li>
              <li>Aiogram</li>
              <li>Asyncio</li>
              <li>FastAPI</li>
              <li>Flask</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Front & GUI</h4>
            <ul className="text-neutral-500 space-y-2 text-sm font-medium">
              <li>HTML / CSS / JS</li>
              <li>React / Tailwind</li>
              <li>PySide6</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Environment</h4>
            <ul className="text-neutral-500 space-y-2 text-sm font-medium">
              <li>Linux</li>
              <li>Docker</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Связь</h4>
            <ul className="text-neutral-500 space-y-2 text-sm font-medium flex flex-col items-start">
              <a href="https://t.me/Waspel" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline underline-offset-4">Написать в Telegram</a>
              <a href="https://t.me/waspel_projects" target="_blank" rel="noreferrer" className="hover:text-white transition-colors mt-4">Канал с проектами</a>
              <a href="https://t.me/waspelxxx" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Личный блог</a>
              <a href="http://t.me/anonaskbot?start=7juxtzw" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Анонимка</a>
            </ul>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
