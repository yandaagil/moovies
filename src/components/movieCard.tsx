import Link from 'next/link'
import Image from 'next/image'
import { ImageOff } from 'lucide-react';
import { ratingBadge } from '@/utils/rating';
import { MovieList } from '@/types/type';
import { Card } from './ui/card';

const MovieCard = ({ id, poster_path, title, release_date, vote_average }: MovieList) => {
  return (
    <Card className="w-[150px] p-3 rounded-lg bg-primary-foreground text-primary transition-colors shadow-md lg:w-[250px] hover:shadow-lg hover:border-muted-foreground">
      <Link href={`/movie/${id}`}>
        {poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            className="cursor-pointer rounded-lg" alt={`${title} poster`}
            width={250}
            height={100}
            priority={true}
          />
        ) : (
          <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[180px]">
            <ImageOff className="h-10 w-10" />
          </div>
        )}
      </Link>
      <h3 className="mt-3 line-clamp-1 text-sm text-foreground font-semibold lg:text-base">{title}</h3>
      <div className="mt-3 flex flex-row items-center justify-between">
        <span className="text-sm text-muted-foreground lg:text-base">{release_date.split("-")[0]}</span>
        <span className="text-sm text-foreground lg:text-base">{ratingBadge(vote_average)}</span>
      </div>
    </Card>
  )
}

export default MovieCard