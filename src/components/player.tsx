import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from './ui/button'
import { Play } from 'lucide-react'

const Player = ({ movieTrailerKey }: { movieTrailerKey: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hidden md:flex">
          <Play className="mr-1" size={20} />
          <span>Trailer</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movieTrailerKey}`}
          controls={true}
          volume={0.5}
          width={848}
          height={480}
        />
      </DialogContent>
    </Dialog>
  )
}

export default Player