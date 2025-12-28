
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, 
  ArrowUp, MessageCircle, Calendar, CheckCircle2, ChevronRight,
  Stethoscope, Users, Info, BookOpen, Clock
} from 'lucide-react';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import TeamPage from './pages/TeamPage';
import TeamProfile from './pages/TeamProfile';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';
import InsurancePage from './pages/InsurancePage';
import NotFound from './pages/NotFound';

// Componente para resetar o scroll ao topo em cada navegação
const ScrollToTopOnNavigation = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Serviços', path: '/servicos', icon: <Stethoscope size={18} /> },
    { name: 'Equipe', path: '/equipe', icon: <Users size={18} /> },
    { name: 'Sobre', path: '/sobre', icon: <Info size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
    { name: 'Contato', path: '/contato', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white group-hover:bg-blue-700 transition-colors">
              <Stethoscope size={24} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Sorriso<span className="text-blue-600">Real</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/agendar" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Agendar Consulta
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-4 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/agendar"
                onClick={() => setIsOpen(false)}
                className="flex justify-center w-full bg-blue-600 text-white px-3 py-4 rounded-xl text-base font-semibold"
              >
                Agendar Agora
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6 text-white">
              <Stethoscope size={24} />
              <span className="text-xl font-bold">Sorriso<span className="text-blue-400">Real</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Excelência em odontologia moderna com foco no conforto e bem-estar do paciente. Transformamos vidas através do sorriso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/servicos" className="hover:text-blue-400 transition-colors">Serviços</Link></li>
              <li><Link to="/equipe" className="hover:text-blue-400 transition-colors">Nossa Equipe</Link></li>
              <li><Link to="/sobre" className="hover:text-blue-400 transition-colors">Sobre Nós</Link></li>
              <li><Link to="/convenios" className="hover:text-blue-400 transition-colors">Convênios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 flex-shrink-0" />
                <span>Av. Sorriso Feliz, 1234<br />São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span>(11) 4004-1234</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span>contato@sorrisoreal.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Horário</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span className="text-white">08:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-white">08:00 - 13:00</span>
              </li>
              <li className="flex justify-between text-blue-400">
                <span>Emergência 24h</span>
                <span>Disponível</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs uppercase tracking-widest">
          <p>© 2023 Sorriso Real. Todos os direitos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 bg-white border border-slate-200 text-slate-600 p-3 rounded-full shadow-lg hover:bg-slate-50 transition-all z-40 active:scale-90"
    >
      <ArrowUp size={24} />
    </button>
  );
};

const WhatsAppWidget = () => (
  <a
    href="https://wa.me/5555984578753"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all z-40 animate-bounce hover:animate-none group"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
      Fale conosco agora!
    </span>
  </a>
);

export default function App() {
  return (
    <Router>
      <ScrollToTopOnNavigation />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="/servicos/:id" element={<ServiceDetail />} />
            <Route path="/equipe" element={<TeamPage />} />
            <Route path="/equipe/:id" element={<TeamProfile />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/agendar" element={<BookingPage />} />
            <Route path="/agendamento-sucesso" element={<SuccessPage />} />
            <Route path="/convenios" element={<InsurancePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}
