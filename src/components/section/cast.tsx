import React, { useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { Cast } from '@/types/type';

const Cast = ({ credits }: { credits?: Cast }) => {
  const [showAllCast, setShowAllCast] = useState<boolean>(false);

  return (
    <>
      <div className="mt-10 flex flex-row justify-between items-center">
        <h2 className="text-xl font-bold">Cast</h2>
        <Button variant="link" onClick={() => setShowAllCast(!showAllCast)}>
          {showAllCast ? "Hide all cast" : "Show all cast"}
        </Button>
      </div>

      <Table className="mt-2">

        {showAllCast &&
          <TableCaption>
            <p className="underline-offset-4 cursor-pointer hover:underline" onClick={() => setShowAllCast(false)}>
              Hide all cast
            </p>
          </TableCaption>
        }

        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-center">Img</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Character</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {credits?.slice(0, showAllCast ? credits.length : 5).map((cast, index) => (
            <TableRow key={index}>
              <TableCell className="relative">
                {cast.profile_path !== null ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                    alt={cast.name ?? "Actor image"}
                    fill={true}
                    sizes="h-full"
                    style={{ objectFit: "contain" }}
                    priority={true}
                  />
                ) : (
                  <div className="flex justify-center">
                    <ImageOff size={20} />
                  </div>
                )}
              </TableCell>
              <TableCell>
                <Link href={`/actors/${cast.id}`}>
                  <p className="underline-offset-4 hover:underline">{cast.name}</p>
                </Link>
              </TableCell>
              <TableCell>{cast.character}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </>
  )
}

export default Cast