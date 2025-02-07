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
        name: '2021-23',
        role: 'EvolutionCo',
        company: 'React.js, SCSS, and Material-UI (MUI), WordPress, etc.',
        status: 'Active',
    },
    {
        name: '2019-20',
        role: 'Accenture',
        company: 'AEM (Adobe Experience Manager), Jira application',
        status: 'Inactive',
    },
    {
        name: '2019',
        role: 'Goyal Infotech',
        company: 'HTML, CSS(Bootstrap), JavaScript, Basic (PHP and MySQL).',
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
            <section className="flex items-center pb-20 pt-10">
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

            <section className="flex items-center pb-20">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8">What I Do</h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full border-gray-200">
                            <tbody>
                                {[
                                  {
                                    title: 'UI / Front-end Developer',
                                    description:
                                        'Developing dynamic, adaptive layouts that ensure seamless user experiences across all devices.',
                                },
                                {
                                    title: 'Wordpress 6.7',
                                    description:
                                        'Designing sleek, modern interfaces that prioritize user interaction and accessibility.',
                                },
                                {
                                    title: 'React.js / Next.js',
                                    description:
                                        'Optimizing website speed and efficiency by employing best practices in coding and asset management.',
                                },
                                {
                                    title: 'Animations',
                                    description:
                                        'Creating engaging web animations and transitions to enhance visual appeal and interactivity.',
                                },
                                
                        
                                
                                ].map((item, index, array) => {
                                    const isLast = index === array.length - 1 // Determine if the current item is the last
                                    return (
                                        <tr
                                            key={index}
                                            className={`group relative border-t ${isLast ? 'border-b' : 'border-b-0'}`}
                                        >
                                            <td className="py-4 align-top">
                                                <h2 className="flex-grow whitespace-nowrap text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
                                                    {item.title}
                                                </h2>
                                            </td>
                                            {/* <td className="relative py-4 align-top">
                                                <div className="hidden pl-8 font-light text-muted-foreground opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 sm:block">
                                                    {item.description}
                                                </div>
                                            </td> */}
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

            <section className="flex pb-20">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">History</h1>
                    {/* <p className="pb-4 font-light text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore nulla sunt excepturi quidem incidunt est numquam
                        repellat corporis aut minima distinctio, quasi
                        perferendis deleniti ex magni laboriosam earum
                        voluptatem sint nam? Ipsam, corrupti. Temporibus autem
                        repellendus nulla ea hic quia assumenda explicabo
                        cumque. Culpa nesciunt ea sunt, voluptate impedit at!
                    </p> */}
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

            <section className="flex pb-20">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">
                       Experience in Prominent Brand Applications
                    </h1>
                    <p className="mt-4 text-gray-500">
                    I am an experienced front-end developer with a strong focus on designing and developing applications for well-known
brands. I excel in creating visually appealing and user-friendly interfaces using modern technologies such as HTML,
CSS, and JavaScript. I have successfully collaborated with prominent brands, delivering high-quality solutions that
align with their unique identities and exceed user expectations.
          </p>
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


            <section className="flex pb-20">
              <div className="container mx-auto max-w-3xl">
              <div className="flex items-center justify-center bg-gray-50 p-20">
                        <div className="container mx-auto max-w-3xl">
                            <h1 className="title mb-8 text-center text-lg font-medium">
                                MY MOTO
                            </h1>

                            <h1 className="pb-4 text-center text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl">
                                Simplicity is the ultimate sophistication.
                            </h1>
                            <p className="text-center text-sm font-light sm:text-base md:text-lg lg:text-xl">
                                – Leonardo da Vinci
                            </p>
                        </div>
                    </div>
              </div>
            </section>


            <section className="flex items-center pt-20">
                <div className="container mx-auto max-w-3xl">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="...">
                            <h1 className="title mb-8 text-lg font-medium">
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
