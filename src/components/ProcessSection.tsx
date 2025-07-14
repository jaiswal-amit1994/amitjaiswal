import React from 'react';

const ProcessSection = () => {
  const processSteps = [
    {
      number: '01',
      title: "Discovery",
      description: "Deep dive into your business objectives and user needs",
      accent: "bg-blue-100"
    },
    {
      number: '02',
      title: "Strategy",
      description: "Creating a tailored approach to solve your challenges",
      accent: "bg-green-100"
    },
    {
      number: '03',
      title: "Execution",
      description: "Designing and developing with precision",
      accent: "bg-purple-100"
    },
    {
      number: '04',
      title: "Refinement",
      description: "Polishing every detail before launch",
      accent: "bg-amber-100"
    }
  ];

  return (
    <section className="py-32 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-widest text-gray-500 block mb-3">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            The <span className="font-medium">Process</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            How we transform ideas into exceptional digital experiences
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Visual accent */}
              <div className={`absolute -top-4 -left-4 w-24 h-24 rounded-full ${step.accent} opacity-20 group-hover:opacity-30 transition-all duration-300`}></div>
              
              {/* Number */}
              <div className="relative z-10 text-5xl font-light text-gray-300 mb-2">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;