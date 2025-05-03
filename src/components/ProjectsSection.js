import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Plataforma E-commerce',
      description: 'Solución completa de comercio electrónico con carrito de compras y pasarela de pago.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'App de Gestión de Tareas',
      description: 'Aplicación para organizar proyectos con colaboración en tiempo real.',
      tags: ['React', 'Firebase', 'Tailwind CSS']
    },
    {
      title: 'Sitio Web Corporativo',
      description: 'Diseño y desarrollo de sitio web para empresa de tecnología.',
      tags: ['Next.js', 'Framer Motion', 'CSS Modules']
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Proyectos Destacados</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

// DONE