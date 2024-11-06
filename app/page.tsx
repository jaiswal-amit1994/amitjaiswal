'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { CalendarIcon, HandIcon } from '@radix-ui/react-icons'

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

const features = [
    { name: 'Fiat', description: 'AEM Developer' },
    { name: 'Fiatprofessional', description: 'AEM Developer' },
    { name: 'Jeep', description: 'AEM Developer' },
    { name: 'Lancia', description: 'AEM Developer' },
    { name: 'TATA', description: 'Frontend Dev' },
    { name: 'IDBI', description: 'Frontend Dev' },
    { name: 'Mahindra Finance', description: 'Frontend Dev' },
    { name: 'DHL', description: 'Frontend Dev' },
    { name: 'Vedanta', description: 'Frontend Dev' },
]

const people = [
    {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

export default function Home() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])

    const people = [
        {
            name: 'Leslie Alexander',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        // More people...
    ]

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
                                className="mt-8 rounded-lg grayscale"
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
                                    const isLast = index === array.length - 1 // Determine if the current item is the last
                                    return (
                                        <tr
                                            key={index}
                                            className={`group relative border-t ${isLast ? 'border-b' : 'border-b-0'}`}
                                        >
                                            <td className="py-4 align-top">
                                                <h2 className="flex-grow whitespace-nowrap text-3xl font-semibold uppercase text-muted-foreground sm:text-4xl md:text-5xl lg:text-7xl">
                                                    {item.title}
                                                </h2>
                                            </td>
                                            <td className="relative py-4 align-top">
                                                <div className="hidden pl-8 font-light text-muted-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 sm:block">
                                                    {item.description}
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* <section className="flex py-10">
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
            </section> */}

            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">History</h1>
                    <p className="pb-4 font-light text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore nulla sunt excepturi quidem incidunt est numquam
                        repellat corporis aut minima distinctio, quasi
                        perferendis deleniti ex magni laboriosam earum
                        voluptatem sint nam? Ipsam, corrupti. Temporibus autem
                        repellendus nulla ea hic quia assumenda explicabo
                        cumque. Culpa nesciunt ea sunt, voluptate impedit at!
                    </p>
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

            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">
                        Brands That Trust My Work
                    </h1>
                    {/* <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards.
          </p> */}
                    <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                        {features.map(feature => (
                            <div
                                key={feature.name}
                                className="border-t border-gray-200 pt-4"
                            >
                                <dt className="font-medium text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="text-sm text-gray-500">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </section>

            <section className="relative h-[500px] overflow-hidden">
                <div
                    className="parallax h-full w-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                        backgroundAttachment: 'fixed', // Parallax effect
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    {/* Blur background overlay */}
                    <div className="absolute inset-0 bg-background/75 backdrop-blur-sm"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container mx-auto max-w-3xl">
                            <h1 className="title mb-8 text-center text-lg font-medium">
                                MY MOTO
                            </h1>

                            <h1 className="pb-4 text-center text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
                                Simplicity is the ultimate sophistication.
                            </h1>
                            <p className="text-center text-sm font-light sm:text-base md:text-lg lg:text-xl">
                                – Leonardo da Vinci
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex items-center pt-10">
                <div className="container mx-auto max-w-3xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="...">
                            <h1 className="title">
                                Want product news and updates?
                            </h1>
                            <p className="mb-8 text-sm font-light text-muted-foreground">
                                Sign up for our newsletter.
                            </p>
                        </div>
                        <div className="...">
                            <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input type="email" placeholder="Email" />
                                <Button type="submit">Subscribe</Button>
                            </div>
                            <p className="pt-4 text-sm">
                                We care about your data. Read our{' '}
                                <Link href={'/'}>privacy policy</Link>.
                            </p>
                        </div>
                    </div>

                    <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-10 bg-gray-50 p-6 sm:grid-cols-2">
                        <div className="flex items-start space-x-4">
                            <div className="rounded-md bg-black/5 p-2 ring-1 ring-white/10">
                                <CalendarIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 text-black"
                                />
                            </div>
                            <div>
                                <dt className="text-base font-semibold text-black">
                                    Weekly articles
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    Non laboris consequat cupidatat laborum
                                    magna. Eiusmod non irure cupidatat duis
                                    commodo amet.
                                </dd>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="rounded-md bg-black/5 p-2 ring-1 ring-white/10">
                                <HandIcon
                                    aria-hidden="true"
                                    className="h-6 w-6 text-black"
                                />
                            </div>
                            <div>
                                <dt className="text-base font-semibold text-black">
                                    No spam
                                </dt>
                                <dd className="mt-2 text-base/7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis
                                    proident non adipisicing. Voluptate
                                    incididunt anim.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </section>
        </>
    )
}
