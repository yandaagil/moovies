import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { searchMovie } from "@/server/api";
import { Search as SearchIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import type { MovieList } from '@/type';
import { CommandLoading } from 'cmdk'

const Search = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [searchedMovies, setSearchedMovies] = useState<MovieList[]>([]);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 1000);

  const handleSearch = async (debouncedSearch: string) => {
    const res = await searchMovie(debouncedSearch)
    setSearchedMovies(res)
  };

  useEffect(() => {
    handleSearch(debouncedSearch)
  }, [debouncedSearch]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>

        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="px-2 rounded-full">
            <SearchIcon />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[394px] p-0 md:w-[525px]" align="end">
          <Command className="rounded-lg border shadow-none">

            <div className="flex items-center border-b px-3">
              <SearchIcon className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <Input
                type="text"
                id="search"
                className="flex h-11 w-full bg-transparent py-3 text-sm border-0 outline-none placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 md:flex"
                placeholder="Search film..."
                onChange={({ target }) => setSearch(target.value)}
              />
            </div>

            <CommandList>
              {searchedMovies.length > 0
                && <CommandGroup heading="Results">
                  {searchedMovies.slice(0, 8).map((movie, index) => (
                    <Link href={`/movie/${movie.id}`} key={index}>
                      <CommandItem className="cursor-pointer flex flex-row gap-2 items-center justify-between">
                        <div>
                          <span className="text-sm font-normal">{movie.title} <span className="text-foreground/60">({movie.release_date.split("-")[0]})</span></span>
                        </div>
                        {Number(movie.vote_average.toFixed(1))}
                      </CommandItem>
                    </Link>
                  ))}
                </CommandGroup>
              }
              <CommandEmpty>No results found.</CommandEmpty>
            </CommandList>

          </Command>
        </PopoverContent>

      </Popover>
    </>
  )
}

export default Search