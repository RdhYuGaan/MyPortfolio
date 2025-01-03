'use client';

import Button from '../components/Button';
import { projects } from '../utils/dataBase';
import ProjectCard from '../components/ProjectCard';
import { useState } from 'react';

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // List of categories
  const categories = ['All', 'UI/UX', 'Web Design', 'App Design', 'Graphic Design'];

  // Filtered projects based on selected category
  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="my-[3rem] max-w-6xl mx-auto md:my-[6rem]">
      <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">My Projects</h2>
      <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
        Explore my portfolio of diverse projects, showcasing my expertise in design and development.
      </p>

      {/* Render category buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md border text-sm transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-[#0B7474] text-white border-[#0B7474]'
                : 'bg-gray-100 border-gray-300 text-black hover:bg-gray-200 hover:border-[#0B7474]'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Render filtered projects */}
      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imgSrc={project.imgSrc}
            altText={project.altText}
            title={project.title}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
