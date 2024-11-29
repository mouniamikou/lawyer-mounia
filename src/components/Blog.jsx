"use client"
import { motion } from 'framer-motion';

const blogs = [
  {
    title: "Nouvelles règles fiscales pour les résidents non habituels",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    excerpt: "Les changements importants concernant le statut RNH au Portugal pour 2024."
  },
  {
    title: "Guide d'achat immobilier au Portugal",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80",
    excerpt: "Tout ce que vous devez savoir avant d'investir dans l'immobilier portugais."
  },
  {
    title: "Obtention du Visa D7",
    date: "5 Mars 2024",
    image: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&q=80",
    excerpt: "Procédure détaillée pour l'obtention du visa D7 pour les retraités."
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">Actualités juridiques</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-600 text-sm">{blog.date}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{blog.title}</h3>
                <p className="text-gray-600">{blog.excerpt}</p>
                <a href="#" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                  Lire la suite →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}