import Link from 'next/link';
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export default function Custom404() {
  return (

    
  
  <section className="flex items-center py-20">
  <div className="container mx-auto max-w-3xl">
  <div className="relative">
      <div className="relative">
        <span className="text-lg font-extrabold text-rose-200">404</span>
      </div>
      <h1 className="title mb-4">
          Oops! That page got lost in code.
        </h1>
      
    </div>
    <p className="mt-2 max-w-lg text-left font-light text-muted-foreground">
      It looks like the page you’re looking for doesn’t exist or may have been removed. Let's get back on track!
    </p>
    <div className="mt-6">
      <Link href="/" className='block title'>
        <div className="inline-flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <ArrowLeftIcon className="h-5 w-5" />
          Go Back Home
        </div>
      </Link>
    </div>
  </div>
</section>

    
  );
}
