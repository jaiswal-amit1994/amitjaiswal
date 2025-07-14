import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Get in <span className="font-medium">Touch</span>
          </h2>
          <p className="text-gray-600">
            Let's discuss how I can help bring your digital vision to life
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="text-left">
            <span className="block text-gray-500 mb-2 text-sm">Email</span>
            <Link 
              href="mailto:hello@amit.dev" 
              className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
            >
              hello@amit.dev
            </Link>
          </div>
          
          {/* Phone */}
          <div className="text-left">
            <span className="block text-gray-500 mb-2 text-sm">Phone</span>
            <Link 
              href="tel:+1234567890" 
              className="text-lg text-gray-900 hover:text-blue-600 transition-colors"
            >
              +1 (234) 567-890
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="text-left">
            <span className="block text-gray-500 mb-3 text-sm">Connect</span>
            <div className="flex items-center justify-start gap-8">
              {[
                { label: 'Dribbble', icon: 'D', url: '#' },
                { label: 'LinkedIn', icon: 'L', url: '#' },
                { label: 'GitHub', icon: 'G', url: '#' },
                { label: 'Behance', icon: 'B', url: '#' }
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-lg"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;