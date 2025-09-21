
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Transforma tu cuerpo, redefine tu vida.
        </h1>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Consigue tus objetivos de fitness con planes personalizados y el apoyo experto que necesitas.
        </p>
        <a
          href="#contacto"
          className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-bold transition duration-300 shadow-lg inline-block transform hover:scale-105"
        >
          ¡Reserva tu Sesión Gratuita!
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
