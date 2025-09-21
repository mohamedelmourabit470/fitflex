
import React from 'react';
import type { Service } from '../types';
import CheckIcon from './icons/CheckIcon';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <img
        src={service.imageUrl}
        alt={service.title}
        className="w-full h-48 object-cover rounded-md mb-6"
        loading="lazy"
      />
      <h3 className="text-2xl font-bold text-indigo-600 mb-4">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
      <ul className="mt-4 text-left text-gray-700 space-y-2">
        <li><span className="font-semibold text-indigo-500">Beneficios:</span></li>
        {service.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center">
            <CheckIcon />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
