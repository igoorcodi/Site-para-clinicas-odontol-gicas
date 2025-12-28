
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-9xl font-black text-slate-200 mb-4">404</div>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">Página não encontrada</h1>
      <p className="text-slate-600 max-w-md mb-12">
        Parece que o caminho que você tentou acessar não existe ou foi movido. Explore nossas especialidades.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-blue-700 transition-all">
          <Home size={18} className="mr-2" /> Início
        </Link>
        <Link to="/servicos" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold flex items-center justify-center hover:bg-slate-200 transition-all">
          <ArrowLeft size={18} className="mr-2" /> Ver Serviços
        </Link>
      </div>
    </div>
  );
}
