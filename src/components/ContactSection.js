const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-100" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Trabajemos juntos</h2>
        <p className="text-xl text-gray-600 mb-8">
          ¿Tienes un proyecto en mente? Envíame un mensaje y hablemos sobre cómo puedo ayudarte.
        </p>
        
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <textarea 
              placeholder="Tu mensaje" 
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-70 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            ></textarea>
          </div>
          <button 
            type="submit"
            className="px-8 py-3 bg-cyan-600 text-white rounded-lg font-medium hover:bg-cyan-700 transition-colors shadow-md"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

// DONE