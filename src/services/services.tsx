import instance from "@/lib/axios";

const movieServices = {
  searchMovies: (query: string) => instance.get("/search/movie", {
    params: {
      query: query
    }
  }),
  getPopularMovies: (page: number) => instance.get("/movie/popular", {
    params: {
      page: page
    }
  }),
  getUpcomingMovies: (page: number) => instance.get("/movie/upcoming", {
    params: {
      page: page
    }
  }),
  getTopRatedMovies: (page: number) => instance.get("/movie/top_rated", {
    params: {
      page: page
    }
  }),
  getMovieDetail: (id: string | string[]) => instance.get(`/movie/${id}`, {
    params: {
      append_to_response: "videos,credits,release_dates,recommendations"
    }
  }),
  getActor: (id: string | string[]) => instance.get(`/person/${id}`, {
    params: {
      append_to_response: "movie_credits"
    }
  })
};

export default movieServices;
