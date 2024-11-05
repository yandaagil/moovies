import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { nav } from '@/constants/navbar'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const { pathname } = useRouter()

  return (
    <Sheet>
      <SheetTrigger asChild className="inline-block md:hidden">
        <Button variant="ghost" size="icon" className="px-2 rounded-full">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="pt-16">
        <ul className="flex flex-col gap-5 text-right">
          {nav.map(({ title, path }) =>
            <Link href={path} key={title} className='cursor-pointer'>
              <li className={cn("text-sm font-semibold transition-colors text-foreground/60 hover:text-foreground/80",
                { "text-foreground": pathname === path }
              )}>
                {title}
              </li>
            </Link>
          )}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default Sidebar