const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-teal-50 to-cyan-100 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-teal-300 mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-cyan-300 mix-blend-multiply filter blur-xl animate-float-delay"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800 mb-6 animate-fade-in">
          Hola, soy <span className="text-cyan-600">[Tu Nombre]</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in delay-100 font-light">
          Creo experiencias digitales con <span className="font-medium text-cyan-600">diseño</span> y <span className="font-medium text-cyan-600">código</span>
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-cyan-600 text-white rounded-lg text-lg font-medium hover:bg-cyan-700 transition-all transform hover:scale-105 shadow-md animate-fade-in delay-200">
            Ver proyectos
          </button>
          <button className="px-6 py-3 border-2 border-cyan-600 text-cyan-600 rounded-lg text-lg font-medium hover:bg-cyan-50 transition-all transform hover:scale-105 animate-fade-in delay-300">
            Contactar
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 animate-bounce-slow">
        <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;