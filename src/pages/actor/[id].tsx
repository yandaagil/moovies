import Title from '@/components/head'
import { useRouter } from 'next/router';
import React from 'react'
import ActorLayout from '@/components/layout/actorLayout';
import { useActor } from '@/hooks/useMovies';

const Actor = () => {
  const { query: { id } } = useRouter();
  const { data, error, isPending } = useActor(id as string);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading actor</div>;
  }

  const actor = data.data;

  return (
    <>
      <Title title={actor.name} />

      <ActorLayout actor={actor} />
    </>
  )
}

export default Actor