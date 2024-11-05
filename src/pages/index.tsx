import Title from '@/components/head';
import MovieContainer from "@/components/movieContainer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePopularMovies, useTopRatedMovies, useUpcomingMovies } from "@/hooks/useMovies";

export default function Home() {
  const popularMoviesQuery = usePopularMovies();
  const upcomingMoviesQuery = useUpcomingMovies();
  const topRatedMoviesQuery = useTopRatedMovies();

  const popularMovies = popularMoviesQuery.data?.pages.flatMap(page => page.data.results) ?? [];
  const upcomingMovies = upcomingMoviesQuery.data?.pages.flatMap(page => page.data.results) ?? [];
  const topRatedMovies = topRatedMoviesQuery.data?.pages.flatMap(page => page.data.results) ?? [];

  const movies = [
    { title: "Popular", movies: popularMovies },
    { title: "Upcoming", movies: upcomingMovies },
    { title: "Top Rated", movies: topRatedMovies }
  ];

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
