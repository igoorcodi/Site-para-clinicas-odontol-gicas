
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEAM } from '../constants';
import { 
  ArrowLeft, CheckCircle2, Award, 
  Calendar, MessageSquare, Linkedin
} from 'lucide-react';

export default function TeamProfile() {
  const { id } = useParams();
  const member = TEAM.find(m => m.id === id);

  if (!member) return <div className="py-24 text-center">Profissional não encontrado</div>;

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-12">
        <Link to="/equipe" className="inline-flex items-center text-slate-600 font-bold mb-12 hover:text-blue-600 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Voltar para equipe
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-8 border-8 border-white">
                <img src={member.photo} alt={member.name} className="w-full aspect-square object-cover" />
              </div>
              <div className="flex justify-center space-x-4">
                <button className="bg-white p-4 rounded-2xl shadow-sm text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </button>
                <button className="bg-white p-4 rounded-2xl shadow-sm text-slate-400 hover:text-blue-600 transition-colors">
                  <Linkedin size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            <div>
              <p className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">{member.role}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{member.name}</h1>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold border border-blue-100 mb-8">
                <Award size={16} className="mr-2" /> {member.cro}
              </div>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                "{member.bio}"
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span> Especialidades
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {member.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{spec}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Trajetória Profissional</h2>
              <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                <p className="text-slate-600 leading-relaxed">
                  {member.name} possui uma trajetória marcada pela excelência clínica e acadêmica. Com foco em tratamentos humanizados, utiliza as técnicas mais modernas da odontologia mundial para garantir o melhor resultado aos seus pacientes.
                </p>
                <div className="pt-6 border-t border-slate-50">
                  <h4 className="font-bold text-slate-900 mb-4">Experiência e Formação:</h4>
                  <p className="text-slate-600">{member.experience}</p>
                </div>
              </div>
            </section>

            <div className="pt-8">
              <Link 
                to="/agendar" 
                className="bg-blue-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/30 inline-flex items-center"
              >
                <Calendar className="mr-3" /> Agendar com {member.name.split(' ')[1]}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
