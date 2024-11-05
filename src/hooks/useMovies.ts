import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import movieServices from "@/services/services";

export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ["popularMovies"],
    queryFn: ({ pageParam = 1 }) => movieServices.getPopularMovies(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.data.page < lastPage.data.total_pages
        ? lastPage.data.page + 1
        : undefined,
    initialPageParam: 1,
  });
};

export const useUpcomingMovies = () => {
  return useInfiniteQuery({
    queryKey: ["upcomingMovies"],
    queryFn: ({ pageParam = 1 }) => movieServices.getUpcomingMovies(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.data.page < lastPage.data.total_pages
        ? lastPage.data.page + 1
        : undefined,
    initialPageParam: 1,
  });
};

export const useTopRatedMovies = () => {
  return useInfiniteQuery({
    queryKey: ["topRatedMovies"],
    queryFn: ({ pageParam = 1 }) => movieServices.getTopRatedMovies(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.data.page < lastPage.data.total_pages
        ? lastPage.data.page + 1
        : undefined,
    initialPageParam: 1,
  });
};

export const useMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => movieServices.getMovieDetail(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};

export const useActor = (id: string) => {
  return useQuery({
    queryKey: ["actor", id],
    queryFn: () => movieServices.getActor(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
