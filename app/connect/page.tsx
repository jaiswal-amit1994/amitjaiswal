'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { InputForm } from '@/components/sayhello'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

export default function Page() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])
    return (
        <>
            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">
                        Say Hello
                    </h1>
                    <p className="pb-4 font-light text-muted-foreground">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Asperiores doloremque cum magni possimus, eum
                        consequatur inventore eos quo facere facilis
                        perferendis? Quidem ullam doloribus ducimus perferendis
                        reiciendis animi earum iste!
                    </p>

                    <InputForm />
                </div>
            </section>

            <section className="flex py-10">
                <div className="container mx-auto max-w-3xl">
                    <h1 className="title mb-8 text-lg font-medium">
                        From Curiosity to Clarity
                    </h1>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                What services do you offer?
                            </AccordionTrigger>
                            <AccordionContent>
                                I specialize in [list your key services, e.g.,
                                web development, front-end development,
                                React.js, UI/UX design], offering [mention any
                                specific expertise, e.g., customized web
                                solutions, clean code, responsive designs]. My
                                goal is to create [mention your main outcomes,
                                like visually engaging and functional websites
                                or efficient and user-friendly applications].
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                What tools and technologies do you use?
                            </AccordionTrigger>
                            <AccordionContent>
                                My primary tools include [list main programming
                                languages, frameworks, and tools, e.g.,
                                JavaScript, React.js, HTML, CSS, Git]. I also
                                stay updated with emerging technologies and best
                                practices to deliver high-quality work.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Can you describe your work process?
                            </AccordionTrigger>
                            <AccordionContent>
                                I usually start by discussing the project goals
                                with you to understand your needs. Then, I move
                                into planning, design, development, testing, and
                                finally, deployment. Regular check-ins keep you
                                updated, and your feedback is welcome at every
                                stage to ensure the final result aligns with
                                your vision.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                What is your experience in this field?
                            </AccordionTrigger>
                            <AccordionContent>
                                With [number] years of professional experience,
                                I’ve had the opportunity to work on a variety of
                                projects across industries. My background
                                includes [mention relevant highlights, e.g.,
                                developing complex applications, collaborating
                                with teams, or building responsive designs for
                                diverse client needs].
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                Can you show some examples of your past work?
                            </AccordionTrigger>
                            <AccordionContent>
                                Absolutely! Please check out my portfolio
                                section [or link] for examples of my past
                                projects. If you'd like more details on any
                                specific project, feel free to reach out.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6">
                            <AccordionTrigger>
                                How long does it take to complete a project?
                            </AccordionTrigger>
                            <AccordionContent>
                                Project timelines depend on the scope and
                                complexity of the project. For instance, a basic
                                website might take around [x] weeks, whereas a
                                complex application could take [y] weeks or
                                more. After discussing your needs, I’ll provide
                                an estimated timeline.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-7">
                            <AccordionTrigger>
                                How do you handle project challenges or
                                setbacks?
                            </AccordionTrigger>
                            <AccordionContent>
                                Challenges are part of any project, and I
                                approach them with a problem-solving mindset. My
                                approach includes thorough planning, testing,
                                and adaptability to ensure any setbacks are
                                managed efficiently, keeping the project on
                                track.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-8">
                            <AccordionTrigger>
                                How do you stay current with industry trends and
                                technologies?
                            </AccordionTrigger>
                            <AccordionContent>
                                I’m committed to continuous learning and
                                regularly engage in [mention how, e.g., online
                                courses, webinars, attending conferences,
                                reading industry blogs] to stay updated with the
                                latest developments and best practices.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-9">
                            <AccordionTrigger>
                                Do you work independently or with a team?
                            </AccordionTrigger>
                            <AccordionContent>
                                I’m comfortable working both independently and
                                as part of a team. I’ve collaborated with
                                [mention any relevant teams or clients if
                                possible] and can adapt my approach based on
                                project requirements and the client’s
                                preferences.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-10">
                            <AccordionTrigger>
                                How do we get started?
                            </AccordionTrigger>
                            <AccordionContent>
                                Getting started is simple! Reach out via
                                [contact method, e.g., email, contact form], and
                                let’s discuss your project goals. I’ll guide you
                                through the next steps, from understanding your
                                needs to developing a project plan and timeline.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    )
}
