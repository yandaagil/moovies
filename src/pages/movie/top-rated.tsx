import Image from 'next/image'
import { useEffect, useState } from "react";
import { getTopRatedMovieList } from "@/server/api";
import Title from '@/components/layout/head';
import Link from 'next/link';
import { ratingBadge } from '@/utils/rating';
import { Button } from '@/components/ui/button';
import type { MovieList } from '@/type';

export default function Home() {
  const [page, setPage] = useState<number>(1);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieList[]>([]);

  const handleLoadMore = async () => {
    const newPage = page + 1;
    const newMovies = await getTopRatedMovieList(newPage);
    setPage(newPage);
    setTopRatedMovies((prevItems) => [...prevItems, ...newMovies]);
  }

  useEffect(() => {
    getTopRatedMovieList(1).then((res) => {
      setTopRatedMovies(res);
    })
  }, []);

  return (
    <>
      <Title title="Home" />

      <div className="mt-5">

        {/* title */}
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">Top Rated</h1>

        {/* container */}
        <div className="mt-5 w-full flex flex-wrap justify-center items-center gap-2">

          {/* movie card */}
          {topRatedMovies.map((movie, index) => (
            <div key={index} className="w-[150px] p-3 rounded-lg bg-accent text-primary lg:w-[250px]"
            >
              <Link href={`/movie/${movie.id}`}>
                <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="cursor-pointer rounded-lg" alt={`${movie.title} poster`} width={250} height={100} priority={true} />
              </Link>
              <h3 className="mt-3 line-clamp-1 text-sm text-foreground font-semibold lg:text-base">{movie.title}</h3>
              <div className="mt-3 flex flex-row items-center justify-between">
                <span className="text-sm text-foreground lg:text-base">{movie.release_date.split("-")[0]}</span>
                <span className="text-sm text-foreground lg:text-base">{ratingBadge(movie.vote_average)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* load more */}
        <div className="mt-5 text-center">
          <Button variant="link" onClick={handleLoadMore}>
            See more
          </Button>
        </div>

      </div>
    </>
  )
}
