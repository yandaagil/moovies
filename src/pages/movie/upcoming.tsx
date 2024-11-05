import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import MovieContainer from '@/components/movieContainer';
import { useUpcomingMovies } from "@/hooks/useMovies";

export default function Upcoming() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error
  } = useUpcomingMovies();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  const upcomingMovies = data.pages.flatMap(page => page.data.results) ?? [];

  return (
    <>
      <Title title="Upcoming" />

      <MovieContainer title='Upcoming' movieType={upcomingMovies}>
        {hasNextPage && (
          <Button
            variant="link"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading more...' : 'See more'}
          </Button>
        )}
      </MovieContainer>
    </>
  )
}
