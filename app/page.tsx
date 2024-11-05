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
        <>
            <section className="flex items-center py-10">
                <div className="container mx-auto max-w-3xl">
                    <div className="grid grid-cols-1 items-center sm:grid-cols-3 lg:grid-cols-3">
                        <div className="col-span-2 flex flex-col justify-center pe-10">
                            <h1 className="title mb-4">
                                Hey, I'm Amit Jaiswal
                            </h1>
                            <p className="font-light text-muted-foreground">
                                I'm a selectively skilled front-end developer
                                with a strong focus on building high-quality,
                                impactful digital experiences that seamlessly
                                blend design and functionality.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <Image
                                data-scroll
                                data-scroll-speed="0.1"
                                className="rounded-lg grayscale"
                                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="amit jaiswal"
                                layout="responsive"
                                width={700}
                                height={475}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8">What I Do</h1>

                    <div className="grid grid-cols-1">
                        {[
                            {
                                title: '3D',
                                description:
                                    'Building responsive and user-friendly websites using the latest technologies.',
                            },
                            {
                                title: 'Visual',
                                description:
                                    'Designing intuitive interfaces that provide an exceptional user experience.',
                            },
                            {
                                title: 'Motion',
                                description:
                                    'Crafting digital strategies to increase visibility and engagement.',
                            },
                            {
                                title: 'Product',
                                description:
                                    'Producing high-quality content that resonates with target audiences.',
                            },
                            {
                                title: 'Tutorials',
                                description:
                                    'Implementing strategies to improve search engine rankings and drive organic traffic.',
                            },
                        ].map((item, index, array) => {
                            const isLast = index === array.length - 1 // Determine if the current item is the last
                            return (
                                <div
                                    key={index}
                                    className={`title group relative flex items-center overflow-hidden border-t py-4 ${isLast ? 'border-b' : 'border-b-0'}`}
                                >
                                    <h3 className="flex-grow whitespace-nowrap text-2xl font-semibold uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                                        {item.title}
                                    </h3>
                                    <div className="ml-4 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        <div className="pl-4 sm:pl-6 md:pl-8 font-light text-muted-foreground">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
