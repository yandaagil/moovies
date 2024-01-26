import React from 'react'
import { MovieList } from '@/types/type'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import MovieCard from '../movieCard'

type OtherMoviesProps = {
  title: string
  movies?: MovieList[]
  notFound: string
}

const OtherMovies = ({ title, movies, notFound }: OtherMoviesProps) => {
  return (
    <>
      <h2 className="mt-10 mb-2 text-xl font-bold">{title}</h2>

      {movies?.length === 0 && <p className="mt-2 text-sm lg:text-base">{notFound}</p>}

      {/* movie card */}
      {movies !== undefined && movies.length > 0 &&
        <>
          <Carousel opts={{ align: "start" }} className="w-full max-w-full mt-2">
            <CarouselContent>
              {movies?.slice(0, 9).map((movie, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/2 xl:basis-1/3">
                  <div className="p-1">
                    <MovieCard
                      id={movie.id}
                      poster_path={movie.poster_path}
                      release_date={movie.release_date}
                      title={movie.title}
                      vote_average={movie.vote_average}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className='hidden sm:block'>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            Swipe to see more
          </div>
        </>
      }
    </>
  )
}

export default OtherMovies