
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  faq: { q: string; a: string }[];
  image: string;
  icon: string;
}

export interface Dentist {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  experience: string;
  cro: string;
  photo: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  content: string;
  author: string;
  image: string;
}

export interface Appointment {
  serviceId: string;
  dentistId: string;
  date: string;
  time: string;
  customerData: {
    name: string;
    email: string;
    phone: string;
    isFirstTime: boolean;
    insurance?: string;
    notes?: string;
  };
}

export type BookingStep = 1 | 2 | 3 | 4 | 5 | 6 | 7;
