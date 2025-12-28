
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, CheckCircle2, 
  Calendar, Clock, User, Stethoscope, Info,
  AlertCircle,
  Users,
  MapPin,
  Phone
} from 'lucide-react';
import { SERVICES, TEAM } from '../constants';
import { BookingStep, Appointment } from '../types';

export default function BookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<BookingStep>(1);
  const [timeoutActive, setTimeoutActive] = useState(false);
  const [formData, setFormData] = useState<Partial<Appointment>>({
    customerData: {
      name: '',
      email: '',
      phone: '',
      isFirstTime: true,
      insurance: '',
      notes: ''
    }
  });

  // Step names
  const steps = [
    { num: 1, label: 'Serviço', icon: <Stethoscope size={18} /> },
    { num: 2, label: 'Profissional', icon: <User size={18} /> },
    { num: 3, label: 'Data', icon: <Calendar size={18} /> },
    { num: 4, label: 'Horário', icon: <Clock size={18} /> },
    { num: 5, label: 'Seus Dados', icon: <Info size={18} /> },
    { num: 6, label: 'Revisão', icon: <CheckCircle2 size={18} /> }
  ];

  // Inactivity timeout simulation
  useEffect(() => {
    const timer = setTimeout(() => setTimeoutActive(true), 600000); // 10 mins
    return () => clearTimeout(timer);
  }, [step]);

  const nextStep = () => setStep((s) => Math.min(s + 1, 6) as BookingStep);
  const prevStep = () => setStep((s) => Math.max(s - 1, 1) as BookingStep);

  const handleBooking = () => {
    // Formatação dos dados para o WhatsApp
    const serviceName = SERVICES.find(s => s.id === formData.serviceId)?.title;
    const dentistName = formData.dentistId === 'any' 
      ? 'Primeiro disponível' 
      : TEAM.find(t => t.id === formData.dentistId)?.name;

    const message = `*Novo Agendamento - Sorriso Real*%0A%0A` +
      `*PROCEDIMENTO:* ${serviceName}%0A` +
      `*PROFISSIONAL:* ${dentistName}%0A` +
      `*DATA:* ${formData.date}%0A` +
      `*HORÁRIO:* ${formData.time}%0A%0A` +
      `*PACIENTE:* ${formData.customerData?.name}%0A` +
      `*E-MAIL:* ${formData.customerData?.email}%0A` +
      `*CONTATO:* ${formData.customerData?.phone}%0A%0A` +
      `_Por favor, confirme a disponibilidade deste horário._`;

    const phoneNumber = '5555984578753'; // Número da clínica
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');

    // Navega para a página de sucesso interna
    navigate('/agendamento-sucesso', { state: { booking: formData } });
  };

  // Função para gerar datas válidas (próximos 30 dias, excluindo domingos)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // 0 é domingo
      if (date.getDay() !== 0) {
        dates.push({
          full: date.toLocaleDateString('pt-BR'),
          day: date.getDate(),
          weekday: date.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
          month: date.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')
        });
      }
    }
    return dates;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">O que você está procurando?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES.map(s => (
                <button
                  key={s.id}
                  onClick={() => { setFormData({...formData, serviceId: s.id}); nextStep(); }}
                  className={`p-6 text-left rounded-2xl border-2 transition-all ${
                    formData.serviceId === s.id 
                    ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-100' 
                    : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <p className="font-bold text-lg mb-1">{s.title}</p>
                  <p className="text-slate-500 text-sm">{s.shortDescription}</p>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Prefere algum especialista?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => { setFormData({...formData, dentistId: 'any'}); nextStep(); }}
                className={`p-6 text-center rounded-2xl border-2 transition-all ${
                  formData.dentistId === 'any' 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-slate-100'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-4 flex items-center justify-center text-slate-500">
                  <Users size={32} />
                </div>
                <p className="font-bold text-lg">Qualquer disponível</p>
                <p className="text-slate-500 text-sm">Agendamento mais rápido</p>
              </button>
              {TEAM.map(d => (
                <button
                  key={d.id}
                  onClick={() => { setFormData({...formData, dentistId: d.id}); nextStep(); }}
                  className={`p-6 text-center rounded-2xl border-2 transition-all ${
                    formData.dentistId === d.id 
                    ? 'border-blue-600 bg-blue-50 ring-4 ring-blue-100' 
                    : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                    <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="font-bold text-lg">{d.name}</p>
                  <p className="text-slate-500 text-sm">{d.role}</p>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="w-full text-slate-500 font-bold py-2 mt-4 underline">Voltar</button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Escolha uma data disponível</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {getAvailableDates().map((d, i) => (
                <button 
                  key={i}
                  onClick={() => { setFormData({...formData, date: d.full}); nextStep(); }}
                  className={`p-4 rounded-2xl text-center border-2 transition-all flex flex-col items-center justify-center ${
                    formData.date === d.full 
                      ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-100' 
                      : 'border-slate-100 hover:border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${formData.date === d.full ? 'text-blue-200' : 'text-slate-400'}`}>
                    {d.weekday}
                  </span>
                  <span className="text-xl font-black my-1">{d.day}</span>
                  <span className={`text-[10px] uppercase font-bold ${formData.date === d.full ? 'text-blue-200' : 'text-slate-500'}`}>
                    {d.month}
                  </span>
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="w-full text-slate-500 font-bold py-2 mt-4 underline">Voltar</button>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Horários disponíveis em {formData.date}</h3>
            <div className="grid grid-cols-3 gap-3">
              {['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00'].map(t => (
                <button
                  key={t}
                  onClick={() => { setFormData({...formData, time: t}); nextStep(); }}
                  className={`py-4 rounded-xl font-bold transition-all border-2 ${
                    formData.time === t ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-100' : 'border-slate-100 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button onClick={prevStep} className="w-full text-slate-500 font-bold py-2 mt-4 underline">Voltar</button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Precisamos de seus dados de contato</h3>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  value={formData.customerData?.name}
                  onChange={(e) => setFormData({...formData, customerData: {...formData.customerData!, name: e.target.value}})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="Ex: João da Silva"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  value={formData.customerData?.email}
                  onChange={(e) => setFormData({...formData, customerData: {...formData.customerData!, email: e.target.value}})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Telefone (WhatsApp)</label>
                <input 
                  type="tel" 
                  value={formData.customerData?.phone}
                  onChange={(e) => setFormData({...formData, customerData: {...formData.customerData!, phone: e.target.value}})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-600 outline-none"
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-6">
              <button 
                onClick={nextStep}
                disabled={!formData.customerData?.name || !formData.customerData?.email || !formData.customerData?.phone}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold disabled:opacity-50 shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
              >
                Revisar Agendamento
              </button>
              <button onClick={prevStep} className="w-full text-slate-500 font-bold py-2 underline">Voltar</button>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Confirme seu agendamento</h3>
            
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Resumo do Pedido</p>
              </div>
              <div className="p-6 space-y-5">
                {/* Alinhamento refinado para as informações */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-0.5">
                    <Stethoscope size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Serviço</p>
                    <p className="text-slate-900 font-bold">{SERVICES.find(s => s.id === formData.serviceId)?.title}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-0.5">
                    <User size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Profissional</p>
                    <p className="text-slate-900 font-bold">{formData.dentistId === 'any' ? 'Primeiro Disponível' : TEAM.find(t => t.id === formData.dentistId)?.name}</p>
                  </div>
                </div>

                {/* Data e Horário juntos conforme solicitado: Horário abaixo da Data */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600 mt-0.5">
                    <Calendar size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Data e Horário</p>
                    <p className="text-slate-900 font-bold">{formData.date}</p>
                    <div className="flex items-center text-blue-600 font-black text-sm mt-0.5">
                      <Clock size={14} className="mr-1.5" />
                      <span>{formData.time}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex items-start space-x-4">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-500 mt-0.5">
                    <Users size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Paciente</p>
                    <p className="text-slate-900 font-bold leading-tight">{formData.customerData?.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{formData.customerData?.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão menor e mais resumido conforme solicitado */}
            <div className="space-y-3 pt-2">
              <button 
                onClick={handleBooking}
                className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
              >
                <span>Finalizar via WhatsApp</span>
                <ChevronRight size={18} />
              </button>
              <button 
                onClick={prevStep} 
                className="w-full text-slate-400 font-bold text-xs py-2 hover:text-blue-600 transition-colors uppercase tracking-widest"
              >
                Alterar dados
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="text-slate-500 hover:text-blue-600 flex items-center font-bold transition-colors">
            <ChevronLeft size={20} className="mr-1" /> Voltar ao Início
          </Link>
          <div className="hidden sm:flex items-center space-x-2">
            {steps.map(s => (
              <div 
                key={s.num} 
                className={`w-12 h-1 rounded-full transition-all duration-500 ${step >= s.num ? 'bg-blue-600' : 'bg-slate-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-slate-200 relative overflow-hidden">
            {timeoutActive && (
              <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex items-center justify-center p-8 text-center">
                <div className="max-w-xs">
                  <AlertCircle size={64} className="mx-auto text-yellow-500 mb-6" />
                  <h4 className="text-2xl font-bold mb-4">Sessão Expirada</h4>
                  <p className="text-slate-600 mb-8">Para garantir a reserva do horário correto, por favor reinicie o processo.</p>
                  <button 
                    onClick={() => { setStep(1); setTimeoutActive(false); }}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold"
                  >
                    Recomeçar Agendamento
                  </button>
                </div>
              </div>
            )}
            
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                  {steps[step-1].icon}
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-blue-600">Etapa {step} de 6</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-700 ease-out"
                  style={{ width: `${(step/6)*100}%` }}
                />
              </div>
            </div>

            {renderStep()}
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 -translate-y-4 translate-x-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h4 className="font-bold text-xl mb-6 relative z-10">Dúvida no Agendamento?</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 relative z-10">
                Nossa recepção pode te ajudar a escolher o melhor especialista para o seu caso.
              </p>
              <a href="https://wa.me/5555984578753" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-white/20 text-center py-4 rounded-2xl font-bold transition-all border border-white/10">
                Falar com Recepcionista
              </a>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-lg">
              <h4 className="font-bold text-lg mb-6">Compromisso Sorriso Real</h4>
              <ul className="space-y-5">
                {[
                  "Segurança em primeiro lugar",
                  "Tecnologia Digital 3D",
                  "Ambiente 100% esterilizado",
                  "Atendimento sem pressa"
                ].map((text, i) => (
                  <li key={i} className="flex items-start space-x-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
