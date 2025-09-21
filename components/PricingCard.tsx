
import React from 'react';
import type { PricingPlan } from '../types';
import CheckIcon from './icons/CheckIcon';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  const cardClasses = plan.isPopular
    ? 'bg-white p-8 rounded-lg shadow-xl border-t-4 border-indigo-600 transform md:scale-105 relative z-10'
    : 'bg-white p-8 rounded-lg shadow-lg border-t-4 border-indigo-400 hover:shadow-xl transition duration-300 transform hover:-translate-y-2';

  return (
    <div className={cardClasses}>
      {plan.isPopular && (
        <span className="absolute top-0 right-0 -mt-4 mr-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
          Más Popular
        </span>
      )}
      <h3 className="text-3xl font-bold text-gray-800 mb-4">{plan.title}</h3>
      <p className="text-5xl font-extrabold text-indigo-600 mb-6">
        €{plan.price}<span className="text-lg text-gray-500">/mes</span>
      </p>
      <p className="text-gray-600 mb-6">{plan.description}</p>
      <ul className="text-left text-gray-700 space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={plan.paymentLink}
        className="block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full text-lg font-semibold transition duration-300"
      >
        Contratar Plan {plan.title}
      </a>
    </div>
  );
};

export default PricingCard;
