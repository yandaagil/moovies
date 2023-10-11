import Image from 'next/image'
import { useEffect, useState } from "react";
import { getPopularMovieList, getUpcomingMovieList, getTopRatedMovieList } from "@/server/api";
import Title from '@/components/layout/head';
import Link from 'next/link';
import { ratingBadge } from '@/utils/rating';
import { Button } from '@/components/ui/button';
import type { MovieList } from '@/type';
import { ImageOff } from 'lucide-react';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState<MovieList[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieList[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieList[]>([]);
  const movies = [
    { title: "Popular", movies: popularMovies },
    { title: "Upcoming", movies: upcomingMovies },
    { title: "Top Rated", movies: topRatedMovies }
  ];

  useEffect(() => {
    getPopularMovieList().then((res) => {
      setPopularMovies(res);
    })
    getUpcomingMovieList().then((res) => {
      setUpcomingMovies(res);
    })
    getTopRatedMovieList().then((res) => {
      setTopRatedMovies(res);
    })
  }, []);

  return (
    <>
      <Title title="Home" />

      {movies.map((movieType, index) => (
        <div key={index} className="mt-5">
          {/* title */}
          <div className='flex flex-row justify-between items-center'>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">{movieType.title}</h1>
            <Link href={`/movie/${movieType.title.toLowerCase().replace(" ", "-")}`}>
              <Button variant="link">
                See more
              </Button>
            </Link>
          </div>

          {/* container */}
          <div className="mt-5 w-full flex flex-wrap justify-center items-center gap-2">

            {/* movie card */}
            {movieType.movies.slice(0, 8).map((movie, index) => (
              <div key={index} className="w-[150px] p-3 rounded-lg bg-accent text-primary lg:w-[250px]">
                <Link href={`/movie/${movie.id}`}>
                  {movie.poster_path
                    ? <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="cursor-pointer rounded-lg" alt={`${movie.title} poster`} width={250} height={100} priority={true} />
                    : <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[180px]">
                      <ImageOff className="h-10 w-10" />
                    </div>
                  }
                </Link>
                <h3 className="mt-3 line-clamp-1 text-sm text-foreground font-semibold lg:text-base">{movie.title}</h3>
                <div className="mt-3 flex flex-row items-center justify-between">
                  <span className="text-sm text-foreground lg:text-base">{movie.release_date.split("-")[0]}</span>
                  <span className="text-sm text-foreground lg:text-base">{ratingBadge(movie.vote_average)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
