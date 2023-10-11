import { CalendarDays, Clock9 } from 'lucide-react'
import React from 'react'
import { Separator } from '../ui/separator'
import { ratingBadge } from '@/utils/rating'
import type { MovieDetailList } from '@/type'
import { releaseDateStr, runtime } from '@/utils/datetime-format'

const MovieInfo = ({ movieInfo }: { movieInfo: MovieDetailList | null }) => {
  const movieCertification = movieInfo?.release_dates.results
    .filter((result) =>
      result.iso_3166_1 === "US")[0]
    ?.release_dates.filter((movieType) =>
      movieType.type === 3)[0]
    ?.certification;

  return (
    <div className="mt-3 flex flex-row gap-3 items-center">

      {/* release date */}
      <span className="flex flex-row gap-2 items-center text-sm lg:text-base">
        <CalendarDays size={20} />
        {movieInfo?.release_date ? releaseDateStr(movieInfo.release_date) : "N/A"}
      </span>
      <Separator orientation="vertical" />

      {/* runtime */}
      <span className="flex flex-row gap-2 items-center text-sm lg:text-base">
        <Clock9 size={20} />
        {movieInfo?.runtime ? runtime(movieInfo.runtime) : "N/A"}
      </span>
      <Separator orientation="vertical" />

      {/* certification */}
      {movieCertification &&
        <>
          <p className="text-sm lg:text-base">{movieCertification}</p>
          <Separator orientation="vertical" />
        </>
      }

      {/* rating */}
      {movieInfo?.vote_average && ratingBadge(Number(movieInfo?.vote_average.toFixed(1)))}
    </div>
  )
}

export default MovieInfo