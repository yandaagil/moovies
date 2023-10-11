import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

const Sidemenu = () => {
  return (
    <Sheet>

      <SheetTrigger asChild className="inline-block md:hidden">
        <Button variant="ghost" size="icon" className="px-2 rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent className="pt-16">
        <ul className="flex flex-col gap-5 text-right">
          <Link href="/movie/popular" className="cursor-pointer">
            <li className="text-xl font-semibold transition-colors text-foreground/60 hover:text-foreground/80">Popular</li>
          </Link>
          <Link href="/movie/upcoming" className="cursor-pointer">
            <li className="text-xl font-semibold transition-colors text-foreground/60 hover:text-foreground/80">Upcoming</li>
          </Link>
          <Link href="/movie/top-rated" className="cursor-pointer">
            <li className="text-xl font-semibold transition-colors text-foreground/60 hover:text-foreground/80">Top Rated</li>
          </Link>
        </ul>
      </SheetContent>

    </Sheet>
  )
}

export default Sidemenu