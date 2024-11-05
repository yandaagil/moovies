import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import MovieContainer from '@/components/movieContainer';
import { usePopularMovies } from "@/hooks/useMovies";

export default function Popular() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error
  } = usePopularMovies();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  const popularMovies = data.pages.flatMap(page => page.data.results) ?? [];

  return (
    <>
      <Title title="Popular" />

      <MovieContainer title='Popular' movieType={popularMovies}>
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
