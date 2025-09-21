
import React from 'react';
import type { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

const testimonials: Testimonial[] = [
  {
    quote: '¡Absolutamente transformador! Perdí 10 kg en 3 meses y nunca me he sentido mejor. El plan fue perfecto para mí y mi estilo de vida ocupado.',
    name: 'Laura Gómez',
    role: 'Cliente Satisfecha',
    imageUrl: 'https://picsum.photos/id/237/100/100',
  },
  {
    quote: 'El mejor entrenador con el que he trabajado. Su conocimiento en nutrición y entrenamiento es increíble. ¡Resultados garantizados!',
    name: 'Carlos Ruiz',
    role: 'Cliente Satisfecho',
    imageUrl: 'https://picsum.photos/id/238/100/100',
  },
  {
    quote: 'Gracias a su guía, he logrado aumentar mi masa muscular y mi fuerza de una manera que no creía posible. ¡Totalmente recomendado!',
    name: 'Ana Torres',
    role: 'Cliente Satisfecha',
    imageUrl: 'https://picsum.photos/id/239/100/100',
  },
];


const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Lo que dicen mis clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
