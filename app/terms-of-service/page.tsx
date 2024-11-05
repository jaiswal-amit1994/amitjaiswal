import React from 'react';

const TermsOfService = () => {
  return (
    <section className="flex items-center py-10">
                <div className="container mx-auto max-w-3xl">
                <h1 className="title mb-8">Terms of Service</h1>
                <p className='font-light text-muted-foreground pb-4'><strong>Effective Date:</strong> [Insert Date]</p>
                <p className='font-light text-muted-foreground'>Welcome to [Your Company Name] ("we", "us", or "our"). By accessing or using our website [Your Website URL] (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our Site.</p>

                <h2 className="title pt-8 pb-2">1. Acceptance of Terms</h2>
                <p className='font-light text-muted-foreground'>By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.</p>

      <h2 className="title pt-8 pb-2">2. Changes to Terms</h2>
      <p className='font-light text-muted-foreground'>We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least [insert number] days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

      <h2 className="title pt-8 pb-2">3. User Responsibilities</h2>
      <p className='font-light text-muted-foreground'>You agree to use our Site in compliance with applicable laws and regulations. You agree not to:</p>
      <ul className="list-disc list-inside font-light text-muted-foreground">
        <li>Use the Site for any unlawful purpose</li>
        <li>Transmit any viruses or malicious code</li>
        <li>Attempt to gain unauthorized access to any part of the Site</li>
      </ul>

      <h2 className="title pt-8 pb-2">4. Intellectual Property</h2>
      <p className='font-light text-muted-foreground'>The content and materials on our Site, including text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.</p>

      <h2 className="title pt-8 pb-2">5. Limitation of Liability</h2>
      <p className='font-light text-muted-foreground'>In no event shall [Your Company Name] be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site.</p>

      <h2 className="title pt-8 pb-2">6. Governing Law</h2>
      <p className='font-light text-muted-foreground'>These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles.</p>

      <h2 className="title pt-8 pb-2">7. Contact Us</h2>
      <p className='font-light text-muted-foreground'>If you have any questions about these Terms, please contact us:</p>
    </div>
  </section>
    
  );
};

export default TermsOfService;
