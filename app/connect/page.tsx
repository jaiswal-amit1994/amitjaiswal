'use client'

import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { InputForm } from '@/components/sayhello'

export default function page() {
    useEffect(() => {
        // Ensure this code runs only in the client (browser)
        if (typeof window !== 'undefined') {
            const locomotiveScroll = new LocomotiveScroll()
        }
    }, [])
    return (
        <section className="flex py-10">
            <div className="container mx-auto max-w-3xl">
                <h1 className="title mb-8 text-lg font-medium">Say Hello</h1>
                <p className="pb-4 font-light text-muted-foreground">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores doloremque cum magni possimus, eum consequatur
                    inventore eos quo facere facilis perferendis? Quidem ullam
                    doloribus ducimus perferendis reiciendis animi earum iste!
                </p>

                <InputForm />
            </div>
        </section>
    )
}
