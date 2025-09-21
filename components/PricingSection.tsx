
import React from 'react';
import type { PricingPlan } from '../types';
import PricingCard from './PricingCard';

const plans: PricingPlan[] = [
  {
    title: 'Básico',
    price: 99,
    description: 'Ideal para empezar tu transformación.',
    features: ['1 sesión/semana (online o presencial)', 'Plan de entrenamiento básico', 'Soporte por email'],
    isPopular: false,
    paymentLink: '#',
  },
  {
    title: 'Popular',
    price: 149,
    description: 'El equilibrio perfecto para tus metas.',
    features: ['2 sesiones/semana (online o presencial)', 'Plan de entrenamiento avanzado', 'Asesoramiento nutricional básico', 'Soporte por WhatsApp'],
    isPopular: true,
    paymentLink: '#',
  },
  {
    title: 'Premium',
    price: 249,
    description: 'Para quienes buscan resultados de élite.',
    features: ['3+ sesiones/semana (online o presencial)', 'Plan de entrenamiento élite', 'Asesoramiento nutricional avanzado', 'Soporte 24/7 y revisión semanal', 'Planificación de suplementación'],
    isPopular: false,
    paymentLink: '#',
  },
];

const PricingSection: React.FC = () => {
  return (
    <section id="precios" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Nuestros Planes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
