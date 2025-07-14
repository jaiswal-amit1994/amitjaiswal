import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 sticky top-0 z-50">
      <a href="/" className="hover:opacity-80 transition-opacity duration-200">
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={80}
          height={20} // Required - adjust this to match your logo's aspect ratio
          priority
        />
      </a>
      <nav className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            Services
          </a>
          <a
            href="#case-studies"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            Case Studies
          </a>
        </div>
        <a
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Let's Talk
        </a>
      </nav>
    </header>
  );
}
