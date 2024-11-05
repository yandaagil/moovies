import { useRouter } from 'next/router';
import Title from '@/components/head';
import MovieDetailLayout from '@/components/layout/movieDetailLayout';
import { useMovieDetail } from '@/hooks/useMovies';

const MovieDetail = () => {
  const { query: { id } } = useRouter();
  const { data, error, isPending } = useMovieDetail(id as string);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movie detail</div>;
  }

  const movieDetail = data.data;

  return (
    <>
      <Title title={movieDetail.title} />

      <MovieDetailLayout movieDetail={movieDetail} />
    </>
  )
}

export default MovieDetail