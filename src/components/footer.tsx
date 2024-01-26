import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-5 py-5 lg:px-10 flex justify-center h-auto mt-5 border-t bg-background/80 border-accent">
      <div className="w-full flex flex-col items-center space-y-2 lg:space-y-0 lg:flex-row lg:justify-between lg:w-5/6">
        <span className='text-sm font-medium text-muted-foreground'>Movie API from{' '}
          <Link href="https://www.themoviedb.org/" className='underline underline-offset-2 hover:opacity-70'>TMDB</Link>
        </span>
        <div className='space-x-2'>
          <span className='text-sm font-medium text-muted-foreground'>Built by{' '}
            <Link href="https://www.yandaagil.xyz/" className='underline underline-offset-2 hover:opacity-70'>yandaagil</Link></span>
          <span className='text-sm font-medium text-muted-foreground'>•</span>
          <Link href="https://github.com/yandaagil/moovies" className='text-sm font-medium text-muted-foreground underline underline-offset-2 hover:opacity-70'>Source Code</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer