import Title from '@/components/head';
import { Button } from '@/components/ui/button';
import MovieContainer from '@/components/movieContainer';
import { useTopRatedMovies } from "@/hooks/useMovies";

export default function TopRated() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    error
  } = useTopRatedMovies();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading movies</div>;
  }

  const topRatedMovies = data.pages.flatMap(page => page.data.results) ?? [];

  return (
    <>
      <Title title="Top Rated" />

      <MovieContainer title='Top Rated' movieType={topRatedMovies}>
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
