import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MovieList } from '@/type'
import { ratingBadge } from '@/utils/rating'
import { ImageOff } from 'lucide-react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const OtherMovies = ({ title, movies, notFound }: { title: string, movies?: MovieList[], notFound: string }) => {
  return (
    <>
      <h2 className="mt-5 mb-2 text-xl font-bold">{title}</h2>

      {movies?.length === 0 && <p className="mt-2 text-sm lg:text-base">{notFound}</p>}

      {/* <div className="mt-5 w-full flex flex-wrap items-center gap-2"> */}

      {/* movie card */}
      <Splide aria-label="My Favorite Images" options={{
        perPage: 3,
        rewind: true,
      }}>
        {movies?.slice(0, 12).map((movie, index) => (
          <SplideSlide key={index}>
            <div className="w-[110px] p-1 rounded-lg bg-accent text-primary md:w-[180px]">
              <Link href={`/movie/${movie.id}`}>
                {movie.poster_path
                  ? <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="cursor-pointer rounded-lg" alt={`${movie.title} poster`} width={180} height={100} priority={true} />
                  : <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[180px]">
                    <ImageOff className="h-10 w-10" />
                  </div>
                }
              </Link>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* </div> */}
    </>
  )
}

export default OtherMovies