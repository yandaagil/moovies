import Image from "next/image"
import { ImageOff } from "lucide-react"
import MovieInfo from "../section/movieInfo"
import Hyperlink from "../section/hyperlink"
import OtherMovies from "../section/otherMovies"
import { MovieDetailList } from "@/types/type"
import Genres from "../section/genres"
import Cast from "../section/cast"

const MovieDetailLayout = ({ movieDetail }: { movieDetail: MovieDetailList }) => {
  return (
    <div className="mt-5 flex flex-col lg:flex-row">

      {/* Poster */}
      <div className="w-full mb-5 relative aspect-[9/13] h-fit lg:w-2/6 lg:mr-5">
        {movieDetail?.poster_path !== null ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movieDetail?.poster_path}`}
            alt={movieDetail?.title ?? "Poster image"}
            fill={true}
            style={{ objectFit: "contain" }}
            priority={true}
          />
        ) : (
          <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[250px]">
            <ImageOff size={80} />
          </div>
        )}
      </div>

      <article className="w-full flex flex-col lg:w-4/6">

        {/* Title */}
        <h1 className="text-3xl font-bold">{movieDetail?.title}</h1>
        <p className="text-sm text-muted-foreground lg:text-base">{movieDetail?.tagline}</p>

        {/* Movie Info */}
        <MovieInfo movieInfo={movieDetail} />

        {/* Genres */}
        {movieDetail?.genres && movieDetail.genres.length > 0 && <Genres genres={movieDetail} />}

        {/* Hyperlink */}
        <Hyperlink links={movieDetail} />

        {/* Overview */}
        <h2 className="mt-10 text-xl font-bold">Overview</h2>
        <p className="mt-2 text-sm lg:text-base">{movieDetail?.overview}</p>

        {/* Cast */}
        {movieDetail?.credits.cast && movieDetail.credits.cast.length > 0 && <Cast credits={movieDetail?.credits.cast} />}

        {/* Movie Recommendation */}
        <OtherMovies title="Recommendation" movies={movieDetail?.recommendations.results} notFound="No recommendation movies found" />
      </article>
    </div>
  )
}

export default MovieDetailLayout