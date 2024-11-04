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
        
        <section className="flex items-center py-20">
  <div className="container mx-auto max-w-3xl">
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 items-center">
      <div className="col-span-2 flex flex-col justify-center pe-10">
        <h1 className="title mb-4">
          Hey, I'm Amit Jaiswal
        </h1>
        <p className="font-light text-muted-foreground">
        I'm a selectively skilled front-end developer with a strong focus on building high-quality, impactful digital experiences that seamlessly blend design and functionality.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
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

        

        </>

       
    )
}
