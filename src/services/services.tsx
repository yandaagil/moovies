import instance from "@/lib/axios/instance";
import { Actor, MovieDetailList, MovieList } from '@/types/type';

interface MovieResponse {
  results: MovieList[];
  page: number;
  total_pages: number;
  total_results: number;
}

const movieServices = {
  searchMovies: (query: string) =>
    instance.get<MovieResponse>("/search/movie", {
      params: { query }
    }),

  getPopularMovies: (page: number) =>
    instance.get<MovieResponse>("/movie/popular", {
      params: { page }
    }),

  getUpcomingMovies: (page: number) =>
    instance.get<MovieResponse>("/movie/upcoming", {
      params: { page }
    }),

  getTopRatedMovies: (page: number) =>
    instance.get<MovieResponse>("/movie/top_rated", {
      params: { page }
    }),

  getMovieDetail: (id: string | string[]) =>
    instance.get<MovieDetailList>(`/movie/${id}`, {
      params: {
        append_to_response: "videos,credits,release_dates,recommendations"
      }
    }),

  getActor: (id: string | string[]) =>
    instance.get<Actor>(`/person/${id}`, {
      params: {
        append_to_response: "movie_credits"
      }
    })
};

export default movieServices;