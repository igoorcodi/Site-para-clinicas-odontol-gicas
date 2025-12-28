
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { 
  CheckCircle2, ArrowLeft, Calendar, 
  HelpCircle, Image as ImageIcon 
} from 'lucide-react';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <div className="py-24 text-center">Serviço não encontrado</div>;

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="relative h-[50vh] bg-slate-900">
        <img src={service.image} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
        <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-4 lg:px-8">
          <Link to="/servicos" className="inline-flex items-center text-slate-900 font-bold mb-6 hover:text-blue-600">
            <ArrowLeft size={20} className="mr-2" /> Todos os serviços
          </Link>
          <h1 className="text-5xl font-bold text-slate-900">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-blue-600 rounded-full mr-4"></span> Sobre o tratamento
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">{service.fullDescription}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                    <CheckCircle2 className="text-green-500" />
                    <span className="font-bold text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8">Etapas do processo</h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex items-start space-x-6 relative group">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-2xl font-bold text-xl z-10">
                      {i + 1}
                    </div>
                    {i < service.process.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-1 bg-blue-100 -translate-x-1/2 -z-0"></div>
                    )}
                    <div className="pt-2">
                      <p className="text-lg font-bold text-slate-900 mb-1">{step}</p>
                      <p className="text-slate-500 text-sm">Detalhamento específico desta fase do tratamento.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center"><ImageIcon className="mr-3 text-blue-600" /> Resultados Reais</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-lg group">
                  <img src="https://picsum.photos/seed/res1/800/450" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/20 backdrop-blur-sm transition-opacity">
                    <span className="text-white font-bold px-4 py-2 border-2 border-white rounded-full">Ver antes/depois</span>
                  </div>
                </div>
                <div className="aspect-video bg-slate-200 rounded-3xl overflow-hidden shadow-lg group">
                  <img src="https://picsum.photos/seed/res2/800/450" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8 flex items-center"><HelpCircle className="mr-3 text-blue-600" /> Dúvidas Frequentes</h2>
              <div className="space-y-4">
                {service.faq.map((item, i) => (
                  <details key={i} className="bg-white rounded-2xl border border-slate-100 p-6 group cursor-pointer">
                    <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
                      {item.q}
                      <span className="text-blue-600 text-xl font-bold group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="sticky top-24 bg-blue-600 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-blue-600/30 text-center space-y-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto text-4xl">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold">Pronto para este tratamento?</h3>
              <p className="text-blue-100">Reserve agora mesmo seu horário com nossos especialistas.</p>
              <Link 
                to="/agendar" 
                className="block w-full bg-white text-blue-600 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-lg"
              >
                Agendar Agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
