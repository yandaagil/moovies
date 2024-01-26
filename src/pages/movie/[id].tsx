import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Title from '@/components/head';
import { MovieDetailList } from '@/types/type';
import MovieDetailLayout from '@/components/layout/movieDetailLayout';
import movieServices from '@/services/services';

const MovieDetail = () => {
  const { query } = useRouter();
  const { id } = query;
  const [movieDetail, setMovieDetail] = useState<MovieDetailList | null>(null);

  useEffect(() => {
    if (!id) return;
    movieServices.getMovieDetail(id).then(({ data }) => {
      setMovieDetail(data);
    })
  }, [id]);

  return (
    <>
      <Title title={movieDetail?.title} />

      <MovieDetailLayout movieDetail={movieDetail} />
    </>
  )
}

export default MovieDetail