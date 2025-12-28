
import React from 'react';
import { Service, Dentist, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'implantes',
    title: 'Implantes Dentários',
    shortDescription: 'Recupere sua confiança e função mastigatória com tecnologia de ponta.',
    fullDescription: 'O implante dentário é uma estrutura de titânio que substitui a raiz de um dente perdido. É a solução mais moderna e duradoura para dentes ausentes.',
    benefits: ['Estética Natural', 'Estabilidade Mastigatória', 'Preservação Óssea'],
    process: ['Avaliação Inicial', 'Cirurgia de Colocação', 'Cura e Osseointegração', 'Colocação da Prótese'],
    faq: [
      { q: 'Dói colocar implante?', a: 'O procedimento é feito sob anestesia local, sendo totalmente indolor durante a execução.' },
      { q: 'Quanto tempo dura?', a: 'Com bons cuidados, um implante pode durar a vida toda.' }
    ],
    image: 'https://picsum.photos/seed/implante/800/600',
    icon: '🦷'
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia (Aparelhos)',
    shortDescription: 'Alinhamento perfeito com aparelhos convencionais ou invisíveis (Invisalign).',
    fullDescription: 'Corrigimos a posição dos dentes e dos ossos maxilares de forma funcional e estética.',
    benefits: ['Melhora na Higiene', 'Sorriso Alinhado', 'Saúde da Articulação'],
    process: ['Escaneamento 3D', 'Planejamento Digital', 'Instalação', 'Manutenções Mensais'],
    faq: [
      { q: 'Qual a idade ideal?', a: 'Pode ser iniciado em crianças, jovens e adultos.' }
    ],
    image: 'https://picsum.photos/seed/orto/800/600',
    icon: '✨'
  },
  {
    id: 'clareamento',
    title: 'Clareamento Dental',
    shortDescription: 'Um sorriso mais branco e radiante em poucas sessões.',
    fullDescription: 'Utilizamos técnicas de laser e caseiras supervisionadas para remover manchas e amarelamento.',
    benefits: ['Autoestima Elevada', 'Visual Jovem', 'Procedimento Seguro'],
    process: ['Limpeza Prévia', 'Aplicação do Gel', 'Ativação por Laser', 'Orientações Pós'],
    faq: [
      { q: 'Causa sensibilidade?', a: 'Pode ocorrer sensibilidade transitória, que tratamos com géis específicos.' }
    ],
    image: 'https://picsum.photos/seed/white/800/600',
    icon: '💎'
  }
];

export const TEAM: Dentist[] = [
  {
    id: 'dr-lucas',
    name: 'Dr. Lucas Silva',
    role: 'Implantodontista & Cirurgião',
    specialties: ['Implantes', 'Enxertos Ósseos', 'Cirurgia Oral'],
    experience: '15 anos de experiência clínica.',
    cro: 'CRO-SP 12345',
    photo: 'https://picsum.photos/seed/doc1/400/400',
    bio: 'Especialista pela USP com foco em reabilitações complexas.'
  },
  {
    id: 'dra-julia',
    name: 'Dra. Julia Mendes',
    role: 'Ortodontista',
    specialties: ['Invisalign Doctor', 'Ortodontia Autoligável'],
    experience: '10 anos transformando sorrisos.',
    cro: 'CRO-SP 67890',
    photo: 'https://picsum.photos/seed/doc2/400/400',
    bio: 'Apaixonada por tecnologia e planejamento digital do sorriso.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: '5 Dicas para manter seu clareamento',
    category: 'Dicas',
    date: '10 Out 2023',
    summary: 'Saiba o que comer e o que evitar para seu sorriso brilhar por mais tempo.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Dr. Lucas Silva',
    image: 'https://picsum.photos/seed/blog1/800/400'
  },
  {
    id: 'post-2',
    title: 'Aparelho Invisível: Vale a pena?',
    category: 'Tecnologia',
    date: '15 Out 2023',
    summary: 'Entenda os benefícios e o custo-benefício do tratamento com alinhadores.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    author: 'Dra. Julia Mendes',
    image: 'https://picsum.photos/seed/blog2/800/400'
  }
];
