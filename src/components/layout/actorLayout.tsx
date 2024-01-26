import Image from "next/image"
import { ImageOff } from "lucide-react"
import { calculateAge } from "@/utils/datetimeFormat"
import Link from "next/link"
import { Button } from "../ui/button"
import OtherMovies from "../section/otherMovies"
import { Actor } from "@/types/type"

const ActorLayout = ({ actor }: { actor: Actor | null }) => {
  return (
    <div className="mt-5 flex flex-col lg:flex-row">

      {/* poster */}
      <div className="w-full mb-5 min-h-[500px] relative lg:w-2/6 lg:mr-5 lg:max-h-[500px]">
        {actor?.profile_path !== null ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
            alt={actor?.name ?? "Actor image"}
            className="rounded-lg"
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        ) : (
          <div className="flex items-center justify-center rounded-lg bg-foreground/10 h-[250px]">
            <ImageOff size={80} />
          </div>
        )}
      </div>

      <article className="w-full flex flex-col lg:w-4/6">

        {/* name */}
        <h1 className="text-3xl font-bold">{actor?.name}</h1>

        {/* details */}
        <p className="mt-3 text-sm lg:text-base"><span className="font-bold">Born: </span>{actor?.birthday ?? "N/A"}</p>
        <p className="text-sm lg:text-base">
          <span className="font-bold">{`${actor?.deathday ? "Died: " : "Age: "}`}</span>
          {actor?.birthday
            ? actor?.deathday
              ? calculateAge(actor.birthday, actor.deathday)
              : calculateAge(actor.birthday)
            : "N/A"}
        </p>
        <p className="text-sm lg:text-base"><span className="font-bold">Place of Birth: </span>{actor?.place_of_birth ?? "N/A"}</p>

        {/* imdb */}
        <div className="mt-5">
          <Link href={`https://www.imdb.com/name/${actor?.imdb_id}`} target="__blank">
            <Button className="bg-[#F5C518] text-[#0a0a0a] font-bold hover:bg-[#f5d059]">
              IMDb
            </Button>
          </Link>
        </div>

        {/* biography */}
        <h2 className="mt-10 text-xl font-bold">Biography</h2>
        <p className="mt-2 text-sm lg:text-base">{actor?.biography !== "" ? actor?.biography : "No available biography."}</p>

        {/* movie credits */}
        <OtherMovies title="Movie Credits" movies={actor?.movie_credits.cast} notFound="No movie credits found" />
      </article>
    </div>
  )
}

export default ActorLayout