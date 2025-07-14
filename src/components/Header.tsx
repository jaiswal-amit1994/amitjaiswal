import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 sticky top-0 z-50">
      <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
        <Image
          src="/images/logo.svg"
          alt="Company Logo"
          width={80}
          height={20}
          priority
        />
      </Link>
      <nav className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#about"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#case-studies"
            className="text-gray-700 hover:text-black font-medium text-[15px] transition-colors"
          >
            Case Studies
          </Link>
        </div>
        <Link
          href="#contact"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Let&apos;s Talk
        </Link>
      </nav>
    </header>
  );
}