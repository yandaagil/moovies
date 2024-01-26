import { useEffect, useState } from "react";
import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import { MovieList } from '@/types/type';
import MovieContainer from '@/components/movieContainer';
import movieServices from "@/services/services";

export default function TopRated() {
  const [page, setPage] = useState<number>(1);
  const [topRatedMovies, setTopRatedMovies] = useState<MovieList[]>([]);

  const handleLoadMore = async () => {
    const newPage = page + 1;
    const { data } = await movieServices.getTopRatedMovies(newPage);
    setPage(newPage);
    setTopRatedMovies((prevItems) => [...prevItems, ...data.results]);
  }

  useEffect(() => {
    movieServices.getTopRatedMovies(1).then(({ data }) => {
      setTopRatedMovies(data.results);
    });
  }, []);

  return (
    <>
      <Title title="Top Rated" />

      <MovieContainer title='Popular' movieType={topRatedMovies}>
        <Button variant="link" onClick={handleLoadMore}>
          See more
        </Button>
      </MovieContainer>
    </>
  )
}
