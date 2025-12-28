
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  CheckCircle2, Calendar, MapPin, 
  ArrowRight, Share2, BellRing 
} from 'lucide-react';

export default function SuccessPage() {
  const location = useLocation();
  const booking = location.state?.booking;

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-24 px-4 bg-slate-50">
      <div className="max-w-2xl w-full bg-white rounded-[3rem] p-12 text-center shadow-2xl shadow-slate-200">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce">
          <CheckCircle2 size={48} strokeWidth={3} />
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Agendamento Realizado!</h1>
        <p className="text-lg text-slate-600 mb-12">
          Olá <span className="font-bold">{booking?.customerData?.name || 'Paciente'}</span>, sua pré-reserva foi confirmada. Enviamos os detalhes para seu e-mail e WhatsApp.
        </p>

        <div className="bg-slate-50 rounded-3xl p-8 mb-12 text-left space-y-4 border border-slate-100">
          <div className="flex items-center space-x-4">
            <Calendar className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-slate-500">Data e Hora</p>
              <p className="font-bold text-slate-900">{booking?.date || 'Não informada'} às {booking?.time || 'Horário'}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-slate-500">Localização</p>
              <p className="font-bold text-slate-900">Unidade Jardins - Av. Sorriso Feliz, 1234</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <BellRing className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-slate-500">Lembrete</p>
              <p className="font-bold text-slate-900">Chegar com 15 min de antecedência.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all">
            <Calendar size={18} /> <span>Adicionar ao Calendário</span>
          </button>
          <button className="flex items-center justify-center space-x-2 bg-slate-100 text-slate-700 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">
            <Share2 size={18} /> <span>Compartilhar</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <Link to="/" className="text-blue-600 font-bold flex items-center justify-center group">
            Voltar para o site <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
