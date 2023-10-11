import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MovieList } from '@/type'
import { ImageOff } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { ratingBadge } from '@/utils/rating'

const OtherMovies = ({ title, movies, notFound }: { title: string, movies?: MovieList[], notFound: string }) => {
  return (
    <>
      <h2 className="mt-5 mb-2 text-xl font-bold">{title}</h2>

      {movies?.length === 0 && <p className="mt-2 text-sm lg:text-base">{notFound}</p>}

      {/* movie card */}
      <Swiper
        slidesPerView={3}
        navigation={true}
        loop={true}
        modules={[
          Navigation,
          Pagination
        ]}
        pagination={{
          clickable: true,
        }}
        className="max-w-full"
      >
        {movies?.slice(0, 12).map((movie, index) => (
          <SwiperSlide key={index}>
            <div className="w-[110px] p-2 rounded-lg bg-accent text-primary md:w-[180px]">
              <Link href={`/movie/${movie.id}`}>
                {movie.poster_path
                  ? <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="cursor-pointer rounded-lg" alt={`${movie.title} poster`} width={180} height={100} priority={true} />
                  : <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[180px]">
                    <ImageOff className="h-10 w-10" />
                  </div>
                }
              </Link>
              <h3 className="mt-3 line-clamp-3 text-sm text-foreground font-semibold lg:text-base">{movie.title}</h3>
              <div className="mt-3 flex flex-row items-center justify-between">
                <span className="text-sm text-foreground lg:text-base">{movie.release_date.split("-")[0]}</span>
                <span className="text-sm text-foreground lg:text-base">{ratingBadge(Number(movie.vote_average.toFixed(1)))}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default OtherMovies