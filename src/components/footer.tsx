import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-5 py-5 lg:px-10 flex justify-center h-auto mt-5 border-t bg-background/80 border-accent">
      <div className="w-full flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:justify-between lg:w-5/6">
        <p className='text-sm font-medium text-muted-foreground'>Movie API from{' '}
          <Link href="https://www.themoviedb.org/" className='underline underline-offset-2'>TMDB</Link>
        </p>
        <div className='flex gap-2'>
          <p className='text-sm font-medium text-muted-foreground'>Built by{' '}
            <Link href="https://yanda.vercel.app/" className='underline underline-offset-2'>yandaagil</Link>
          </p>
          <p className='text-sm font-medium text-muted-foreground'>•</p>
          <Link href="https://github.com/yandaagil/moovies" className='text-sm font-medium text-muted-foreground underline underline-offset-2'>Source Code</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer