
import React from 'react';
import type { Service } from '../types';
import ServiceCard from './ServiceCard';

const services: Service[] = [
  {
    title: 'Entrenamiento Presencial',
    description: 'Sesiones uno a uno adaptadas a tus necesidades, en el gimnasio o a domicilio. Máxima atención y corrección técnica para resultados óptimos.',
    imageUrl: 'https://images.unsplash.com/photo-1548690312-08a87f0607d0?auto=format&fit=crop&w=870&q=80',
    benefits: ['Atención personalizada', 'Corrección técnica inmediata', 'Mayor motivación'],
  },
  {
    title: 'Entrenamiento Online',
    description: 'Flexibilidad para entrenar donde quieras, con planes personalizados, seguimiento constante y videollamadas.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=870&q=80',
    benefits: ['Total flexibilidad', 'Ahorro de tiempo', 'Seguimiento detallado'],
  },
  {
    title: 'Asesoramiento Nutricional',
    description: 'Planes de alimentación personalizados para potenciar tus resultados, mejorar tu salud y bienestar general.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=870&q=80',
    benefits: ['Dietas personalizadas', 'Mejora de la salud general', 'Optimización del rendimiento'],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
