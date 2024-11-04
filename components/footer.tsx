import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-x-10 gap-y-8 py-20 px-4">
  <div className="container mx-auto max-w-3xl justify-between">
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    <h1 className="title no-underline mb-4">Stay Connected</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      <div>
        <ul className='space-y-2'>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Dribbble</Link>
          </li>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Youtube</Link>
          </li>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Linkedin</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='space-y-2'>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Instagram</Link>
          </li>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Facebook</Link>
          </li>
          <li>
            <Link className='block font-light text-gray-600 text-lg sm:text-xl' href={'/'}>Behance</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className='space-y-4'>
          <li>
            <label className='block font-light text-gray-600 text-base sm:text-lg' htmlFor="">Email</label>
            <Link className='block font-light text-blue-500 text-base sm:text-lg' href={'/'}>jaiswalamit1994@gmail.com</Link>
          </li>
          <li>
            <label className='block font-light text-gray-600 text-base sm:text-lg' htmlFor="">Phone</label>
            <Link className='block font-light text-blue-500 text-base sm:text-lg' href={'/'}>+91 7607520136</Link>
          </li>
        </ul>
      </div>
    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
   

    <div className="flex flex-col md:flex-row justify-between items-center py-4">
  <p className="text-xs md:text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
  <div className="flex space-x-4 mt-2 md:mt-0">
    <a href="/privacy-policy" className="text-xs md:text-sm text-blue-600 hover:underline">Privacy Policy</a>
    <a href="/terms-of-service" className="text-xs md:text-sm text-blue-600 hover:underline">Terms of Service</a>
  </div>
</div>



  </div>
</footer>

  )
}
