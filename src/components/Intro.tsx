import React from 'react'

export default function Intro() {
  return (
    <section 
      id="intro" 
      className="relative flex items-center py-32 px-5 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight md:leading-snug tracking-tight">
          I create <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">elevating digital experiences</span> that inspire, connect, and emotionally resonate with people through thoughtful development and innovative design.
        </h2>
        
        {/* Optional decorative elements */}
        <div className="mt-12 flex items-center gap-4">
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          <span className="text-sm font-medium text-gray-500">UI/UX Designer & Frontend Developer</span>
        </div>
      </div>
    </section>
  )
}