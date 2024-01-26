import { useEffect, useState } from "react";
import Title from '@/components/head';
import { MovieList } from '@/types/type';
import MovieContainer from "@/components/movieContainer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import movieServices from "@/services/services";

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
    movieServices.getPopularMovies(1).then(({ data }) => {
      setPopularMovies(data.results);
    });
    movieServices.getUpcomingMovies(1).then(({ data }) => {
      setUpcomingMovies(data.results);
    });
    movieServices.getTopRatedMovies(1).then(({ data }) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title title="Home" />

      {movies.map((movieType) => (
        <MovieContainer
          key={movieType.title}
          title={movieType.title}
          movieType={movieType.movies}
          slice={12}
        >
          <Link href={`/movie/${movieType.title.toLowerCase().replace(" ", "-")}`}>
            <Button variant="link">
              See more
            </Button>
          </Link>
        </MovieContainer>
      ))}
    </>
  )
}
