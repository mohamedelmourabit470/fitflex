
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center">
      <img
        src={testimonial.imageUrl}
        alt={testimonial.name}
        className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-indigo-200"
        loading="lazy"
      />
      <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
      <h4 className="font-bold text-indigo-600 text-lg">{testimonial.name}</h4>
      <p className="text-gray-500">{testimonial.role}</p>
    </div>
  );
};

export default TestimonialCard;
