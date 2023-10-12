import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-5 lg:px-10 flex justify-center h-20 mt-5 border-t bg-background/80 border-accent">
      <div className="w-full flex items-center lg:w-5/6">
        <p className="text-sm font-medium text-muted-foreground">
          Built by <span className="underline underline-offset-4"><Link href="https://www.yandaagil.xyz/">yandaagil</Link></span>.{" "}
          Movie API by <span className="underline underline-offset-4"><Link href="https://www.themoviedb.org/">TMDB</Link></span>.{" "}
          <span className="underline underline-offset-4"><Link href="https://github.com/yandaagil/moovies">Source Code</Link></span>.
        </p>
      </div>
    </footer>
  )
}

export default Footer