
import React from 'react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

export default function InsurancePage() {
  const insurances = [
    "Amil Dental", "Bradesco Dental", "SulAmérica", 
    "Porto Seguro", "Unimed Odonto", "MetLife",
    "OdontoPrev", "Golden Cross", "Intermédica"
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm">Parcerias</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Convênios Aceitos</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Trabalhamos com os principais planos de saúde para facilitar o seu acesso ao melhor tratamento.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {insurances.map((name, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-center space-x-4 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={20} />
              </div>
              <span className="font-bold text-slate-700">{name}</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-12 rounded-[3rem] shadow-2xl shadow-blue-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 flex items-center"><Info className="mr-3" /> Observações Importantes</h3>
            <ul className="space-y-4 text-blue-100">
              <li>• A cobertura varia de acordo com o plano contratado.</li>
              <li>• Alguns procedimentos específicos podem necessitar de autorização prévia.</li>
              <li>• Caso seu convênio não esteja na lista, entre em contato para verificar novas parcerias.</li>
              <li>• Oferecemos condições especiais de parcelamento para tratamentos particulares.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
