import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center pt-10">
  <div className="container mx-auto max-w-3xl justify-between">
    
    <h1 className="title no-underline mb-8">Stay Connected</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full pb-10">
      <div>
        <ul className='space-y-2'>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Dribbble</Link>
          </li>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Youtube</Link>
          </li>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Linkedin</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='space-y-2'>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Instagram</Link>
          </li>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Facebook</Link>
          </li>
          <li>
            <Link className='block font-light text-muted-foreground' href={'/'}>Behance</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='space-y-4'>
          <li>
            <label className='block font-light text-muted-foreground' htmlFor="">Email</label>
            <Link className='block font-light text-blue-500' href={'/'}>jaiswalamit1994@gmail.com</Link>
          </li>
          <li>
            <label className='block font-light text-muted-foreground' htmlFor="">Phone</label>
            <Link className='block font-light text-blue-500' href={'/'}>+91 7607520136</Link>
          </li>
        </ul>
      </div>
    </div>
    <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
   

    <div className="flex flex-col md:flex-row justify-between items-center py-4">
  <p className="font-light text-muted-foreground text-xs md:text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
  <div className="flex space-x-4 mt-2 md:mt-0">
    <a href="/privacy-policy" className="text-xs md:text-sm font-light text-muted-foreground">Privacy Policy</a>
    <a href="/terms-of-service" className="text-xs md:text-sm font-light text-muted-foreground">Terms of Service</a>
  </div>
</div>



  </div>
</footer>

  )
}
