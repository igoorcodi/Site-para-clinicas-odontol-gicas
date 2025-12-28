
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Calendar, Star, Shield, 
  Sparkles, Award, Users, ArrowRight 
} from 'lucide-react';
import { SERVICES, TEAM, BLOG_POSTS } from '../constants';

export default function Home() {
  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover"
            alt="Consultório"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-blue-400 text-sm font-medium">
              <Sparkles size={16} />
              <span>Tecnologia de ponta ao seu alcance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              O sorriso dos seus <span className="text-blue-500">sonhos</span> começa aqui.
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cuidado personalizado, tecnologia avançada e uma equipe pronta para transformar sua experiência odontológica. Agende sua avaliação gratuita hoje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/agendar" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Agendar Agora <ChevronRight className="ml-2" />
              </Link>
              <Link 
                to="/servicos" 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-all"
              >
                Ver Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="text-blue-600" size={40} />, title: "Segurança Total", desc: "Protocolos rígidos de esterilização e segurança do paciente." },
            { icon: <Award className="text-blue-600" size={40} />, title: "Especialistas", desc: "Corpo clínico altamente qualificado e em constante atualização." },
            { icon: <Sparkles className="text-blue-600" size={40} />, title: "Tecnologia 3D", desc: "Escaneamento digital e planejamento guiado por computador." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Especialidades</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">Serviços pensados para cada detalhe do seu sorriso.</h3>
            </div>
            <Link to="/servicos" className="text-blue-600 font-bold flex items-center group">
              Ver todos os serviços <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <Link 
                key={service.id} 
                to={`/servicos/${service.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-2 rounded-xl text-2xl shadow-sm">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
                  <div className="flex items-center text-blue-600 text-sm font-bold">
                    Saiba mais <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Depoimentos</h2>
          <h3 className="text-4xl font-bold">O que nossos pacientes dizem</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm relative italic">
              <div className="flex text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6">
                "O atendimento da Sorriso Real é simplesmente impecável. Desde a recepção até o resultado final dos meus implantes, me senti segura e bem cuidada."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Avatar" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 not-italic">Maria Oliveira</p>
                  <p className="text-xs text-slate-500 not-italic tracking-wider uppercase">Paciente Sorriso Real</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">Blog e Artigos</h2>
              <h3 className="text-4xl font-bold leading-tight">Mantenha sua saúde bucal em dia com nossas dicas.</h3>
            </div>
            <Link to="/blog" className="text-blue-400 font-bold flex items-center group">
              Ir para o blog <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="h-56 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80" />
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{post.category}</span>
                  <h4 className="text-xl font-bold mb-4 line-clamp-2">{post.title}</h4>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">{post.summary}</p>
                  <div className="text-sm font-medium flex items-center">
                    Ler artigo <ChevronRight size={14} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/30">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Pronto para transformar seu sorriso?</h2>
            <p className="text-lg text-blue-100">
              Junte-se a milhares de pacientes satisfeitos e comece sua jornada para um sorriso perfeito agora mesmo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                to="/agendar" 
                className="bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-lg active:scale-95"
              >
                Agende sua avaliação
              </Link>
              <Link 
                to="/contato" 
                className="text-white border-2 border-white/30 px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all"
              >
                Fale com a gente
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
