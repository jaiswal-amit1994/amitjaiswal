'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Image from 'next/image'

const tableData = [
    {
        name: '2021',
        role: 'Frontend Developer',
        company: 'TechCorp',
        status: 'Active',
    },
    {
        name: '2019',
        role: 'Backend Developer',
        company: 'TechCorp',
        status: 'Inactive',
    },
    {
        name: '2017',
        role: 'UI/UX Designer',
        company: 'TechCorp',
        status: 'Active',
    },
    // Add more objects for additional rows
]

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

        <div className="overflow-x-auto">
            <table className="min-w-full border-gray-200">
                <tbody>
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
                        const isLast = index === array.length - 1; // Determine if the current item is the last
                        return (
                            <tr
                                key={index}
                                className={`border-t relative group ${isLast ? 'border-b' : 'border-b-0'}`}
                            >
                                <td className="py-4 align-top">
                                    <h2 className="flex-grow whitespace-nowrap uppercase text-muted-foreground text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-7xl">
                                        {item.title}
                                    </h2>
                                </td>
                                <td className="py-4 align-top relative">
                                    <div className="font-light pl-8 hidden sm:block text-muted-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                        {item.description}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </div>
</section>



            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8">Experience</h1>
                    <p className="pb-4 font-light text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore nulla sunt excepturi quidem incidunt est numquam
                        repellat corporis aut minima distinctio, quasi
                        perferendis deleniti ex magni laboriosam earum
                        voluptatem sint nam? Ipsam, corrupti. Temporibus autem
                        repellendus nulla ea hic quia assumenda explicabo
                        cumque. Culpa nesciunt ea sunt, voluptate impedit at!
                    </p>
                </div>
            </section>

            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8">History</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-gray-200">
                            <tbody>
                                {tableData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={`${
                                            index === tableData.length - 1
                                                ? 'border-b border-t'
                                                : 'border-t'
                                        }`}
                                    >
                                        <td className="w-1/4 py-4 align-top">
                                            <h2 className="flex-grow whitespace-nowrap text-xl font-semibold sm:text-2xl md:text-3xl lg:text-3xl">
                                            {item.name}
                                            </h2>
                                        </td>
                                        <td className="py-4 align-top">
                                        <h2 className="flex-grow whitespace-nowrap text-xl font-semibold sm:text-2xl md:text-3xl lg:text-3xl">
                                                {item.role}
                                            </h2>
                                            <p className="font-light text-muted-foreground">
                                                {item.company}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}
