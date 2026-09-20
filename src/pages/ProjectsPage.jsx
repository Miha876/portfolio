import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'gorizont',
    title: 'ГОРИЗОНТ',
    status: 'v1.0 beta',
    description: 'Сайт-каталог для компании по продаже теплообменников и комплектующих. Каталог товаров, корзина, оформление заявок, калькулятор стоимости, админ-панель и Telegram-интеграция для получения заказов.',
    date: 'Апрель 2026',
    img: '/gorizont-logo.png'
  }
];

export default function ProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 uppercase tracking-normal">
          Мои Проекты
        </h1>
        <p className="text-neutral-500 font-body mb-16 max-w-xl">
          Сюда выкладываю всё, что допилено до рабочего состояния. <br />
          Open-source — где можно, закрытые проекты — только скрины/тизеры.
        </p>
        
        <div className="flex flex-col gap-24">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="group flex flex-col md:flex-row gap-8 items-center"
            >
              <Link to={`/project/${p.id}`} className="w-full md:w-3/5 overflow-hidden rounded-sm relative aspect-video block bg-neutral-900 border border-neutral-800">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700 z-10 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white border border-white px-6 py-2 rounded-full backdrop-blur-sm tracking-widest text-sm uppercase">Подробнее</span>
                </div>
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </Link>
              <div className="w-full md:w-2/5 flex flex-col gap-4">
                <h3 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-tight">{p.title}</h3>
                <div className="inline-block bg-neutral-900 text-neutral-400 text-xs px-3 py-1 rounded-sm w-fit border border-neutral-800">
                  {p.status}
                </div>
                <p className="text-neutral-400 font-body text-sm md:text-base leading-relaxed mt-2 line-clamp-3">
                  {p.description}
                </p>
                <div className="flex justify-between border-t border-neutral-800 pt-4 mt-2 text-neutral-500 font-body text-sm">
                  <span>{p.date}</span>
                  <Link to={`/project/${p.id}`} className="text-white hover:opacity-70 transition-opacity">Читать далее →</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
