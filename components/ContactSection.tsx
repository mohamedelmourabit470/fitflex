
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
  };

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">¿Listo para empezar?</h2>
          <p className="text-lg text-gray-600 mb-12">
            Completa el formulario para una sesión de consulta gratuita y sin compromiso. ¡Demos el primer paso juntos!
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Teléfono (Opcional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Tu Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-full text-lg font-semibold transition duration-300 w-full md:w-auto"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
