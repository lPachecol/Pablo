const AboutSection = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Diseño UI/UX', 'Animaciones CSS', 'Accesibilidad'
  ];

  return (
    <section className="py-20 px-4 bg-white" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-wider text-cyan-600 uppercase">Sobre mí</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">Más que líneas de código</h2>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-sm h-full">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mi enfoque</h3>
                <p className="text-gray-600 mb-6">
                  Creo en el diseño centrado en el usuario y el código limpio. Cada proyecto es una oportunidad para resolver problemas reales con soluciones elegantes.
                </p>
                <p className="text-gray-600">
                  Cuando no estoy programando, me encontrarás aprendiendo algo nuevo, fotografiando paisajes urbanos o probando cafés especiales.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-8 shadow-sm h-full">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Habilidades técnicas</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;