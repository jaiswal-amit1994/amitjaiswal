import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-10 px-4 w-full overflow-hidden">
      
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8 relative z-10">
        <Image
          src="images/internetcorner.svg"
          alt="Internet corner decoration"
          width={150}
          height={20}
          className="mb-20"
        />

        <div className="grid grid-cols-[1fr_100px_1fr] p-4">
          {/* Left Column */}
          <div className="max-w-[300px]">
            <div className="relative max-w-sm bg-orange-300 text-black p-4 rounded-lg mr-6 ml-auto backdrop-blur-sm">
              <div className="absolute -right-2 bottom-3 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-orange-300"></div>
              <p className="text-sm text-right">
                B.Tech in Electronics & Communication
              </p>
            </div>
          </div>

          {/* Center Profile Image */}
          <div className="flex items-center justify-center relative">
            <div className="absolute inset-0 w-full h-full bg-white/10 rounded-full backdrop-blur-md"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-100 via-green-100 to-orange-100 rounded-full flex items-center justify-center relative z-10">
              <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Amit Jaiswal"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="max-w-[300px]">
            <div className="relative max-w-sm bg-green-300 text-black p-4 rounded-lg ml-6 mt-20 backdrop-blur-sm">
              <div className="absolute -left-2 top-4 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-green-300"></div>
              <p className="text-sm text-left">
                3+ years of professional frontend development experience.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <h3 className="text-xl md:text-2xl font-normal text-gray-700 mb-2">
            Hello, I&apos;m Amit.
          </h3>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            UI/UX & Frontend Developer
          </h1>
        </div>
      </div>
    </section>
  );
}