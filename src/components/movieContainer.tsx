import React from 'react'
import MovieCard from './movieCard'
import { MovieList } from '@/types/type'

type MovieContainerProps = {
  title: string
  movieType: MovieList[]
  children?: React.ReactNode
  slice?: number
}

const MovieContainer = ({ title, movieType, children, slice }: MovieContainerProps) => {
  return (
    <section className="mt-5">
      <div className='flex flex-row justify-between items-center'>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">{title}</h1>
      </div>

      <div className="mt-5 w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
        {movieType.slice(0, slice ? 12 : movieType.length).map((movie) => (
          <MovieCard
            key={movie.title}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>

      <div className="mt-5 text-center">
        {children}
      </div>
    </section>
  )
}

export default MovieContainer