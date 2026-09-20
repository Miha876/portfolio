import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projectsData = {
  'gorizont': {
    title: 'ГОРИЗОНТ',
    status: 'v1.0 beta / В разработке',
    link: 'http://rimax74.ru/',
    date: 'Апрель 2026',
    author: 'wαspᴇl.py',
    description: 'ГОРИЗОНТ — сайт-каталог для компании по продаже теплообменников и комплектующих. Проект включает каталог товаров, корзина, оформление заявок, калькулятор стоимости, админ-панель и Telegram-интеграция для получения заказов и сообщений поддержки.',
    perspectives: 'Доработка админ-панели, расширение каталога, улучшение дизайна, подключение стабильного домена и дальнейшая автоматизация обработки заявок.',
    images: [
      '/gorizont-logo.png',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2670&auto=format&fit=crop'
    ]
  }
};

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Проект не найден</div>;
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24 px-6 max-w-5xl mx-auto"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
        <ArrowLeft size={16} /> Назад
      </Link>

      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight mb-6">{project.title}</h1>
        <div className="flex flex-wrap gap-4 items-center text-sm font-body text-neutral-400 border-b border-neutral-800 pb-8">
          <span className="bg-neutral-900 text-white px-3 py-1 rounded-sm border border-neutral-800">{project.status}</span>
          <span>Анонс: {project.date}</span>
          <span>Автор: {project.author}</span>
          <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-white hover:opacity-70 transition-opacity ml-auto">
            Смотреть сайт <ExternalLink size={14} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-500 mb-4 font-heading">О проекте</h3>
          <p className="text-lg text-neutral-200 font-light leading-relaxed mb-8">{project.description}</p>
          
          <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-500 mb-4 font-heading">Перспективы</h3>
          <p className="text-lg text-neutral-200 font-light leading-relaxed">{project.perspectives}</p>
        </div>
      </div>

      <div className="space-y-8">
        {project.images.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-sm overflow-hidden border border-neutral-900 bg-neutral-900"
          >
            <img src={img} alt={`${project.title} скриншот ${i + 1}`} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
}
