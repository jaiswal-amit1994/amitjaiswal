'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function PrivacyPolicy() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])

    return (
        <section className="flex items-center py-10">
            <div className="container mx-auto max-w-3xl">
                <h1 className="title mb-8">Privacy Policy</h1>
                <p className="pb-4 font-light text-muted-foreground">
                    <strong>Effective Date:</strong> 5 Nov, 2024
                </p>
                <p className="font-light text-muted-foreground">
                    Your privacy is important to us. This Privacy Policy
                    explains how [Your Company Name] ("we", "us", or "our")
                    collects, uses, and protects your information when you visit
                    our website [Your Website URL] (the "Site"). By accessing or
                    using our Site, you agree to the terms of this Privacy
                    Policy.
                </p>

                <h2 className="title pb-2 pt-8">1. Information We Collect</h2>
                <ul className="list-inside list-disc font-light text-muted-foreground">
                    <li>
                        <strong>Personal Information:</strong> When you create
                        an account, subscribe to our newsletter, or contact us,
                        we may collect personal information such as your name,
                        email address, phone number, and any other information
                        you provide.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We may collect information
                        about how you use our Site, including your IP address,
                        browser type, pages visited, and the time and date of
                        your visits.
                    </li>
                </ul>

                <h2 className="title pb-2 pt-8">
                    2. How We Use Your Information
                </h2>
                <p className="font-light text-muted-foreground">
                    We use the information we collect for the following
                    purposes:
                </p>
                <ul className="list-inside list-disc font-light text-muted-foreground">
                    <li>To provide and maintain our Site</li>
                    <li>To improve, personalize, and expand our Site</li>
                    <li>
                        To communicate with you, either directly or through one
                        of our partners, including for customer service, to
                        provide you with updates and other information relating
                        to the Site, and for marketing and promotional purposes
                    </li>
                    <li>
                        To process your transactions and send you related
                        information, including purchase confirmations and
                        invoices
                    </li>
                    <li>To find and prevent fraud</li>
                </ul>

                <h2 className="title pb-2 pt-8">3. Sharing Your Information</h2>
                <p className="font-light text-muted-foreground">
                    We do not sell or rent your personal information to third
                    parties. We may share your information with third parties in
                    the following situations:
                </p>
                <ul className="list-inside list-disc font-light text-muted-foreground">
                    <li>With your consent</li>
                    <li>With service providers who help us operate our Site</li>
                    <li>To comply with legal obligations</li>
                </ul>

                <h2 className="title pb-2 pt-8">
                    4. Security of Your Information
                </h2>
                <p className="font-light text-muted-foreground">
                    We take reasonable measures to protect the information we
                    collect from loss, theft, misuse, and unauthorized access,
                    disclosure, alteration, and destruction.
                </p>

                <h2 className="title pb-2 pt-8">5. Your Rights</h2>
                <p className="font-light text-muted-foreground">
                    You have the right to:
                </p>
                <ul className="list-inside list-disc text-muted-foreground">
                    <li>Access your personal information</li>
                    <li>Request correction of your personal information</li>
                    <li>Request deletion of your personal information</li>
                    <li>
                        Object to the processing of your personal information
                    </li>
                </ul>

                <h2 className="title pb-4 pt-8">
                    6. Changes to This Privacy Policy
                </h2>
                <p className="font-light text-muted-foreground">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page.
                </p>

                <h2 className="title pb-4 pt-8">7. Contact Us</h2>
                <p className="font-light text-muted-foreground">
                    If you have any questions about this Privacy Policy, please
                    contact us:
                </p>
            </div>
        </section>
    )
}
