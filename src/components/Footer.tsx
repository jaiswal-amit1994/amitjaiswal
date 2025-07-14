import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-4 sm:px-8 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-center text-sm">
          © {currentYear} Amit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;