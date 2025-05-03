import React from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900">[TuNombre]</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Inicio</a>
              <a href="#about" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Sobre mí</a>
              <a href="#projects" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Proyectos</a>
              <a href="#contact" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium">Contacto</a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-indigo-600 hover:bg-gray-50">Inicio</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-indigo-600 hover:bg-gray-50">Sobre mí</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-indigo-600 hover:bg-gray-50">Proyectos</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-indigo-600 hover:bg-gray-50">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

// DONE