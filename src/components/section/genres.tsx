import React from 'react'
import { MovieDetailList } from '@/types/type'
import { Badge } from '../ui/badge'

const Genres = ({ genres }: { genres: MovieDetailList | null }) => {
  return (
    <div className="mt-3 flex flex-row flex-wrap gap-2">
      {genres?.genres.map((genre, index) => (
        <Badge key={index} className="rounded-full font-normal cursor-default hover:border-foreground/80 lg:text-sm" variant="outline">
          {genre.name}
        </Badge>
      ))}
    </div>
  )
}

export default Genres