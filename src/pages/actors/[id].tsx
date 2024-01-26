import Title from '@/components/head'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Actor } from '@/types/type';
import ActorLayout from '@/components/layout/actorLayout';
import movieServices from '@/services/services';

const Actor = () => {
  const { query } = useRouter();
  const { id } = query;
  const [actor, setActor] = useState<Actor | null>(null);

  useEffect(() => {
    if (!id) return;
    movieServices.getActor(id).then(({ data }) => {
      setActor(data);
    })
  }, [id]);

  return (
    <>
      <Title title={actor?.name} />

      <ActorLayout actor={actor} />
    </>
  )
}

export default Actor