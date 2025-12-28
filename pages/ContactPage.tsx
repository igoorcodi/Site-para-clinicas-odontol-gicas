
import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, 
  Send, MessageCircle, Instagram, Facebook 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Dúvida',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Número da clínica (mesmo usado no widget do App.tsx)
    const phoneNumber = '5555984578753';
    
    // Formatação da mensagem para o WhatsApp
    const text = `*Novo Contato via Site - Sorriso Real*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*E-mail:* ${formData.email}%0A` +
      `*Assunto:* ${formData.subject}%0A` +
      `*Mensagem:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Contato</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Estamos aqui para ouvir você.</h1>
                <p className="text-slate-600 text-lg">
                  Tire suas dúvidas, envie sugestões ou venha nos visitar. Nosso time está pronto para te atender.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Localização</h4>
                    <p className="text-slate-600">Av. Sorriso Feliz, 1234, Jardins<br />São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Telefone</h4>
                    <p className="text-slate-600">(11) 4004-1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">E-mail</h4>
                    <p className="text-slate-600">contato@sorrisoreal.com.br</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Atendimento</h4>
                    <p className="text-slate-600">Seg a Sex: 08h às 20h<br />Sáb: 08h às 13h</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex space-x-4">
                <a href="#" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-blue-600 transition-all"><Instagram size={24} /></a>
                <a href="#" className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-400 hover:text-blue-600 transition-all"><Facebook size={24} /></a>
                <a href="https://wa.me/5555984578753" target="_blank" rel="noopener noreferrer" className="p-4 bg-green-50 rounded-2xl shadow-sm border border-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-all"><MessageCircle size={24} /></a>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Envie uma mensagem</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Nome</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome" 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com" 
                        className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Assunto</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none"
                    >
                      <option value="Dúvida">Dúvida</option>
                      <option value="Orçamento">Orçamento</option>
                      <option value="Convênios">Convênios</option>
                      <option value="Sugestão">Sugestão</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5} 
                      placeholder="Como podemos ajudar?" 
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20">
                    <span>Enviar Mensagem</span>
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 grayscale relative">
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-bold bg-slate-200">
          <div className="text-center">
            <MapPin size={48} className="mx-auto mb-4 opacity-20" />
            [Integração Google Maps aqui]
          </div>
        </div>
      </section>
    </div>
  );
}
