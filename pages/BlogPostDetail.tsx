
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar, User, Share2, Facebook, Instagram } from 'lucide-react';

export default function BlogPostDetail() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <div className="py-24 text-center">Artigo não encontrado</div>;

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <Link to="/blog" className="inline-flex items-center text-slate-500 font-bold mb-12 hover:text-blue-600">
          <ArrowLeft size={20} className="mr-2" /> Todos os artigos
        </Link>
        
        <div className="space-y-6 mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-slate-500 font-medium">
            <span className="flex items-center"><Calendar size={18} className="mr-2" /> {post.date}</span>
            <span className="flex items-center"><User size={18} className="mr-2" /> Por {post.author}</span>
          </div>
        </div>

        <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-video">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-slate max-w-none text-slate-600 leading-relaxed">
          <p className="text-xl font-medium text-slate-900 mb-8">
            {post.summary}
          </p>
          <div className="space-y-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h2 className="text-2xl font-bold text-slate-900 mt-12">Por que isso é importante?</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.</p>
          </div>
        </article>

        {/* Footer actions */}
        <div className="mt-20 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-slate-900">Compartilhar:</span>
            <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all">
              <Facebook size={20} />
            </button>
            <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all">
              <Instagram size={20} />
            </button>
            <button className="p-3 bg-slate-50 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-all">
              <Share2 size={20} />
            </button>
          </div>
          <Link 
            to="/agendar" 
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </div>
  );
}
