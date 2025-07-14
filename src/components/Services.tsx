import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-32 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gray-400"></span>
            <span className="text-sm uppercase tracking-widest text-gray-500">what i do?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            Ser<span className="font-medium">vices</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="lg:pr-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              my expertises.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I specialize in crafting user-centric designs and developing
              responsive web applications. My expertise includes UI/UX design,
              frontend development, and creating interactive prototypes.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Web Development",
                subtitle: "Robust full-stack applications",
              },
              {
                title: "UI/UX Design",
                subtitle: "Human-centered interfaces",
              },
              {
                title: "Responsive Design",
                subtitle: "Flawless cross-device experiences",
              },
              {
                title: "Design Systems",
                subtitle: "Scalable visual frameworks",
              },
              {
                title: "Brand Identity",
                subtitle: "Cohesive digital presence",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-b border-gray-100 pb-6 group"
              >
                <h4 className="text-2xl md:text-3xl font-light text-gray-800 mb-1 transition-colors duration-300 group-hover:text-blue-600">
                  {item.title}
                </h4>
                <p className="text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid - Improved Version */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="lg:pr-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              my digital tool box.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I utilize a range of tools to bring my designs to life, including
              Figma for design, React for development, and various prototyping
              tools to ensure a smooth workflow. My goal is to create efficient
              and effective digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {[
              {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                color: "bg-purple-100",
              },
              {
                name: "React",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                color: "bg-blue-100",
              },
              {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                color: "bg-sky-100",
              },
              {
                name: "Tailwind",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
                color: "bg-cyan-100",
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                color: "bg-gray-100",
              },
              {
                name: "Node.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                color: "bg-green-100",
              },
              {
                name: "JavaScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                color: "bg-yellow-100",
              },
              {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                color: "bg-orange-100",
              },
            ].map((tool) => (
              <div
                key={tool.name}
                className={`p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:shadow-md hover:translate-y-1 ${tool.color}`}
              >
                <div className="relative w-12 h-12 mb-3 flex items-center justify-center">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <p className="text-center text-gray-700 text-sm font-medium">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
