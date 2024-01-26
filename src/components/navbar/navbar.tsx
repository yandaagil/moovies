import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Search from './search'
import Sidemenu from './sidemenu'
import { useRouter } from 'next/router'

const Navbar = () => {
  const { pathname } = useRouter()
  const { setTheme } = useTheme()
  const [lightMode, setLightMode] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setLightMode(savedTheme);
  }, []);

  const toggleLightMode = () => {
    const newTheme = lightMode === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
    setLightMode(newTheme);
  };

  return (
    <header className="w-full px-5 lg:px-10 h-14 backdrop-blur-xl sticky top-0 z-50 flex border-b bg-background/80 border-accent justify-center">
      <nav className="w-full flex flex-row items-center justify-between lg:w-5/6">
        <div className="flex flex-row gap-10">

          {/* logo */}
          <Link href="/">
            <h2 className="text-lg font-bold text-foreground">Moovies</h2>
          </Link>

          {/* navigation */}
          <ul className="hidden flex-row gap-5 items-center md:flex">
            <Link href="/movie/popular" className="cursor-pointer">
              <li className={`text-sm font-semibold transition-colors ${pathname === '/movie/popular' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground/80`}>Popular</li>
            </Link>
            <Link href="/movie/upcoming" className="cursor-pointer">
              <li className={`text-sm font-semibold transition-colors ${pathname === '/movie/upcoming' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground/80`}>Upcoming</li>
            </Link>
            <Link href="/movie/top-rated" className="cursor-pointer">
              <li className={`text-sm font-semibold transition-colors ${pathname === '/movie/top-rated' ? 'text-foreground' : 'text-foreground/60'} hover:text-foreground/80`}>Top Rated</li>
            </Link>
          </ul>

        </div>
        <div className="flex flex-row gap-3 items-center">

          {/* search */}
          <Search />

          {/* dark mode toggle */}
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="px-2 rounded-full" onClick={toggleLightMode}>{lightMode === "dark" ? <Sun /> : <Moon />}</Button>
              </TooltipTrigger>
              <TooltipContent>
                {lightMode === "dark" ? "Change to light mode" : "Change to dark mode"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* sidemenu for mobile */}
          <Sidemenu />
        </div>
      </nav>
    </header>
  )
}

export default Navbar