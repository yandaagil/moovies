import { useEffect, useState } from "react";
import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import { MovieList } from '@/types/type';
import MovieContainer from '@/components/movieContainer';
import movieServices from "@/services/services";

export default function Popular() {
  const [page, setPage] = useState<number>(1);
  const [popularMovies, setPopularMovies] = useState<MovieList[]>([]);

  const handleLoadMore = async () => {
    const newPage = page + 1;
    const { data } = await movieServices.getPopularMovies(newPage);
    setPage(newPage);
    setPopularMovies((prevItems) => [...prevItems, ...data.results]);
  }

  useEffect(() => {
    movieServices.getPopularMovies(1).then(({ data }) => {
      setPopularMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title title="Popular" />

      <MovieContainer title='Popular' movieType={popularMovies}>
        <Button variant="link" onClick={handleLoadMore}>
          See more
        </Button>
      </MovieContainer>
    </>
  )
}
