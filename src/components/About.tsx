import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-32 px-5">
      <div className="max-w-5xl mx-auto">
         {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-gray-400"></span>
            <span className="text-sm uppercase tracking-widest text-gray-500">Who am i?</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 leading-tight">
            About <span className="font-medium">me</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Amit working on a laptop"
              width={687}
              height={458}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              A brief intro, Who am I?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I&apos;m a UI/UX and Frontend Developer with a passion for creating
              engaging digital experiences. With a background in design and
              development, I strive to bridge the gap between aesthetics and
              functionality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in the tech world has been driven by a desire to craft
              intuitive interfaces that not only look good but also provide
              seamless user experiences. I believe in the power of collaboration
              and continuous learning to stay ahead in this ever-evolving field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}