'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Link from 'next/link'
import { ArrowLeftIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons'

export default function Custom404() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])

    return (
        <section className="flex items-center py-10">
            <div className="container mx-auto max-w-3xl">
                <div className="relative">
                    <h1 className="title mb-4 flex items-center">
                        <ExclamationTriangleIcon className="me-2" />
                        Oops! That page got lost in code.
                    </h1>
                </div>
                <div className="mt-2 max-w-lg text-left font-light text-muted-foreground">
                    Oops! It seems that the page you're looking for has either
                    been moved or doesn't exist anymore. But don't worry! Let's
                    get back on track together!
                    <span className="mt-4 block">
                        <strong>Here’s what you can do:</strong>
                    </span>
                    <ul className="mb-4 mt-4 list-inside list-disc">
                        <li>Check the URL for any typos or errors.</li>
                        <li>
                            Go Back Home to explore our other exciting content!
                        </li>
                        <li>
                            Use the search bar above to find exactly what you're
                            looking for.
                        </li>
                    </ul>
                    If you need further assistance, feel free to reach out to
                    our support team. We’re here to help!
                </div>

                <Link
                    href="/"
                    className="mt-8 inline-flex items-center gap-2 focus:outline-none"
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    <span>Go Back Home</span>
                </Link>
            </div>
        </section>
    )
}
