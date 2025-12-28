
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nossas Soluções</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Especialidades Odontológicas</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços com foco em alta tecnologia e atendimento humanizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link 
              key={service.id} 
              to={`/servicos/${service.id}`}
              className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 flex items-center justify-center rounded-2xl text-4xl mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                {service.shortDescription}
              </p>
              <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                Ver detalhes <ChevronRight size={18} className="ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
