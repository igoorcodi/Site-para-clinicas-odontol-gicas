
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Search, ChevronRight, Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const categories = ['Todos', 'Dicas', 'Tecnologia', 'Saúde', 'Curiosidades'];

  const filteredPosts = activeCategory === 'Todos' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(p => p.category === activeCategory);

  return (
    <div className="py-24 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nosso Blog</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Educação e Dicas de Saúde</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Acreditamos que um paciente bem informado cuida melhor do seu sorriso.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="h-60 overflow-hidden relative">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                  <span className="flex items-center"><User size={12} className="mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Ler artigo <ChevronRight size={18} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
