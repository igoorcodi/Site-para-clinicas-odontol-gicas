
import React from 'react';
import { Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { ChevronRight, Award, GraduationCap } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nossos Especialistas</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Equipe de Excelência</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Profissionais dedicados, com formação nas melhores instituições e paixão por transformar sorrisos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TEAM.map((member) => (
            <Link 
              key={member.id} 
              to={`/equipe/${member.id}`}
              className="group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-80 md:h-auto overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{member.name}</h3>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-slate-600 text-sm">
                    <Award size={18} className="mr-3 text-blue-500" />
                    <span>{member.cro}</span>
                  </div>
                  <div className="flex items-start text-slate-600 text-sm">
                    <GraduationCap size={18} className="mr-3 text-blue-500 mt-0.5" />
                    <span>{member.experience}</span>
                  </div>
                </div>

                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Ver perfil completo <ChevronRight size={18} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
