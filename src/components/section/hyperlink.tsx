import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Player from '../player'
import { Globe, Play } from 'lucide-react'
import { MovieDetailList } from '@/types/type'

const Hyperlink = ({ links }: { links?: MovieDetailList | null }) => {
  const movieTrailerKey = links?.videos.results
    .filter((video) =>
      video.official && video.site === "YouTube" && video.type === "Trailer")[0]?.key;

  return (
    <div className="mt-5 flex flex-row gap-2">

      {/* IMDb */}
      <Link href={`https://www.imdb.com/title/${links?.imdb_id}`} target="__blank">
        <Button className="bg-[#F5C518] text-[#0a0a0a] font-bold hover:bg-[#f5d059]">
          IMDb
        </Button>
      </Link>

      {/* Trailer */}
      {movieTrailerKey &&
        <>
          <Player movieTrailerKey={movieTrailerKey ?? ""} />
          <Link href={`https://www.youtube.com/watch?v=${movieTrailerKey}`} target="_blank" className="md:hidden">
            <Button variant="outline">
              <Play className="mr-1" size={20} />
              <span>Trailer</span>
            </Button>
          </Link>
        </>
      }

      {/* Website */}
      {links?.homepage &&
        <Link href={links?.homepage ?? ""} target="__blank">
          <Button variant="outline">
            <Globe className="mr-1" size={20} />
            <span>Website</span>
          </Button>
        </Link>
      }
    </div>
  )
}

export default Hyperlink