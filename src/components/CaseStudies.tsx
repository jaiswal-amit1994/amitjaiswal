import React from 'react';
import Image from 'next/image';

const CaseStudies = () => {
  const projects = [
    {
      id: 1,
      title: "Fintech Dashboard Redesign",
      category: "UI/UX Design • Frontend Development",
      description: "Transformed complex financial data into an intuitive dashboard with 42% increased user engagement",
      image: "https://images.unsplash.com/photo-1613487270668-2b4df6406cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Figma", "React", "D3.js", "Tailwind"],
      link: "#",
      year: "2023"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "UX Research • Design System",
      description: "Redesigned checkout flow reducing cart abandonment by 28%",
      image: "https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?q=80&w=1199&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["User Testing", "Design System", "Next.js", "Framer Motion"],
      link: "#",
      year: "2022"
    },
    {
      id: 3,
      title: "Healthcare Portal",
      category: "UI Design • Accessibility",
      description: "Created WCAG 2.1 AA compliant interface serving 1M+ patients",
      image: "https://images.unsplash.com/photo-1554196278-f6a49cff326c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Accessibility", "Vue.js", "Storybook", "Sass"],
      link: "#",
      year: "2023"
    }
  ];

  return (
    <section className="py-32 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gray-400"></span>
            <span className="text-sm uppercase tracking-widest text-gray-500">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Case <span className="font-medium">Studies</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="space-y-28">
          {projects.map((project) => (
            <article key={project.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] lg:aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col justify-center">
                  <span className="text-gray-500 mb-2">{project.year}</span>
                  <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <span className="text-gray-500 mb-4">{project.category}</span>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link} 
                    className="inline-flex items-center gap-2 text-gray-900 font-medium"
                  >
                    View Case Study
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-28">
          <a 
            href="#" 
            className="inline-block px-8 py-4 border border-gray-900 rounded-full text-gray-900"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;