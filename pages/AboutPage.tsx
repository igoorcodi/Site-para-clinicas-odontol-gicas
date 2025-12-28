
import React from 'react';
import { Shield, Sparkles, Heart, Users, Target, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      {/* Header */}
      <section className="py-24 px-4 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Nossa História</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">Mais que uma clínica, um compromisso com você.</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Fundada em 2008, a Sorriso Real nasceu com o propósito de humanizar o atendimento odontológico, unindo tecnologia de ponta e um ambiente acolhedor.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-6 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold">Missão</h3>
            <p className="text-slate-600">Proporcionar saúde bucal de excelência através de tratamentos inovadores e atendimento personalizado.</p>
          </div>
          <div className="space-y-6 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-bold">Visão</h3>
            <p className="text-slate-600">Ser referência em odontologia digital e reabilitação oral, transformando vidas em cada sorriso.</p>
          </div>
          <div className="space-y-6 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <Heart size={32} />
            </div>
            <h3 className="text-2xl font-bold">Valores</h3>
            <p className="text-slate-600">Ética, transparência, inovação constante e profundo respeito ao bem-estar do paciente.</p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Infraestrutura Moderna</h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Nossa clínica foi projetada para oferecer o máximo conforto. Contamos com salas de atendimento climatizadas, equipamentos de última geração e um fluxo digital completo (CAD/CAM).
              </p>
              <ul className="space-y-6">
                {[
                  { icon: <Shield className="text-blue-400" />, text: "Biossegurança rigorosa e esterilização monitorada." },
                  { icon: <Sparkles className="text-blue-400" />, text: "Escaneamento digital 3D (Adeus moldagens tradicionais)." },
                  { icon: <Users className="text-blue-400" />, text: "Espaço Kids exclusivo para os pequenos." }
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-slate-300">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/clinica1/400/500" className="rounded-3xl shadow-2xl" alt="Clínica" />
              <img src="https://picsum.photos/seed/clinica2/400/500" className="rounded-3xl shadow-2xl mt-12" alt="Equipamentos" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
