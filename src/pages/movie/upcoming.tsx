import { useEffect, useState } from "react";
import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import { MovieList } from '@/types/type';
import MovieContainer from '@/components/movieContainer';
import movieServices from "@/services/services";

export default function Upcoming() {
  const [page, setPage] = useState<number>(1);
  const [upcomingMovies, setUpcomingMovies] = useState<MovieList[]>([]);

  const handleLoadMore = async () => {
    const newPage = page + 1;
    const { data } = await movieServices.getUpcomingMovies(newPage);
    setPage(newPage);
    setUpcomingMovies((prevItems) => [...prevItems, ...data.results]);
  }

  useEffect(() => {
    movieServices.getUpcomingMovies(1).then(({ data }) => {
      setUpcomingMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title title="Upcoming" />

      <MovieContainer title='Popular' movieType={upcomingMovies}>
        <Button variant="link" onClick={handleLoadMore}>
          See more
        </Button>
      </MovieContainer>
    </>
  )
}
