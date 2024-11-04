'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Image from 'next/image'

export default function Home() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])

    return (
        <section className="flex flex-col items-center gap-x-10 gap-y-4 py-20 md:flex-row">
            <div className="container mx-auto max-w-3xl justify-between">
                <div className="flex flex-col items-center gap-x-10 gap-y-4 py-16 md:flex-row">
                    <div className="mt-2 flex-1 md:mt-0">
                        <h1 className="title no-underline">
                            Hey, I'm Amit Jaiswal
                        </h1>
                        <p className="mt-3 font-light text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Provident exercitationem deleniti sit quas?
                            Vitae accusantium, optio eligendi qui excepturi ab
                            sint a maxime pariatur facilis, illo error dolore,
                            officia harum.
                        </p>
                    </div>
                    <div className="relative">
                        <Image
                            className="flex-1 rounded-lg grayscale"
                            src={
                                'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                            }
                            alt="amit jaiswal"
                            width={175}
                            height={175}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
