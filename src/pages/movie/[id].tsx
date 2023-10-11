import React, { useEffect, useState } from 'react'
import { getMovieDetails } from '@/server/api';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Title from '@/components/layout/head';
import type { MovieDetailList } from '@/type';
import OtherMovies from '@/components/section/other-movies';
import Cast from '@/components/movie-detail/cast';
import Hyperlink from '@/components/movie-detail/hyperlink';
import MovieInfo from '@/components/movie-detail/movie-info';
import Genres from '@/components/movie-detail/genres';
import { ImageOff } from 'lucide-react';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movieDetail, setMovieDetail] = useState<MovieDetailList | null>(null);

  useEffect(() => {
    if (!id) return;
    getMovieDetails(id).then((res) => {
      setMovieDetail(res);
    });
  }, [id]);

  return (
    <>
      <Title title={movieDetail?.title} />

      <div className="mt-5 flex flex-col lg:flex-row">

        {/* poster */}
        <div className="w-full mb-5 min-h-[500px] relative lg:w-2/6 lg:mr-5 lg:max-h-[500px]">
          {movieDetail?.poster_path !== null
            ? <Image src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`} alt={movieDetail?.title ?? "Poster image"} className="rounded-lg" fill={true} style={{ objectFit: "none" }} priority={true} />
            : <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[250px]">
              <ImageOff size={80} />
            </div>
          }
        </div>

        <div className="w-full flex flex-col lg:w-4/6">

          {/* title */}
          <h1 className="text-3xl font-bold">{movieDetail?.title}</h1>
          <p className="text-sm lg:text-base">{movieDetail?.tagline}</p>

          {/* movie info */}
          <MovieInfo movieInfo={movieDetail} />

          {/* genres */}
          {movieDetail?.genres && movieDetail.genres.length > 0 && <Genres genres={movieDetail} />}

          {/* hyperlink */}
          <Hyperlink links={movieDetail} />

          {/* overview */}
          <h2 className="mt-5 text-xl font-bold">Overview</h2>
          <p className="mt-2 text-sm lg:text-base">{movieDetail?.overview}</p>

          {/* cast */}
          {movieDetail?.credits.cast && movieDetail.credits.cast.length > 0 && <Cast credits={movieDetail?.credits.cast} />}

          {/* movie recommendation */}
          <OtherMovies title="Recommendation" movies={movieDetail?.recommendations.results} notFound="No recommendation movies found" />
        </div>
      </div>
    </>
  )
}

export default MovieDetail