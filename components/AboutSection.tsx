
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1571019624523-a1e6ec1ef31e?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
            alt="Personal Trainer explicando ejercicio"
            className="rounded-lg shadow-xl w-full h-auto object-cover max-h-[450px]"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Un poco sobre mí</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Soy Alex, un apasionado personal trainer dedicado a ayudarte a alcanzar tu mejor versión. Con años de experiencia y una formación sólida en entrenamiento y nutrición, mi misión es proporcionarte las herramientas, el conocimiento y la motivación para que superes tus límites. Creo firmemente que un estilo de vida saludable es accesible para todos, y estoy aquí para guiarte en cada paso del camino, adaptándome a tus necesidades y ritmo. ¡Juntos, haremos que tus metas se conviertan en realidad!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
