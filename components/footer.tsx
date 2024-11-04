import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center gap-x-10 gap-y-4 py-20">
      <div className="container mx-auto max-w-3xl justify-between">
      <h3 className='title mb-4'>Connect</h3>
      <div className="grid grid-cols-3 gap-4 w-full">
        <div>
            <ul className=''>
              <li className=''>
                <Link href={'/'}>Dribbble</Link>
              </li>
              <li className=''>
                <Link href={'/'}>Youtube</Link>
              </li>
              <li className=''>
                <Link href={'/'}>Linkedin</Link>
              </li>
            </ul>
        </div>
        <div>
        <ul className=''>
              <li className=''>
                <Link href={'/'}>Instagram</Link>
              </li>
              <li className=''>
                <Link href={'/'}>Facebook</Link>
              </li>
              <li className=''>
                <Link href={'/'}>behance</Link>
              </li>
            </ul>
        </div>
        <div>
        <ul className=''>
              <li className=''>
                <label className='block' htmlFor="">Email</label>
                <Link href={'/'}>jaiswalamit1994@gmail.com</Link>
              </li>
              <li className=''>
                <label className='block' htmlFor="">Phone</label>
                <Link href={'/'}>+91 7607520136</Link>
              </li>
            </ul>
        </div>
      </div>
      </div>
    </footer>
  )
}
