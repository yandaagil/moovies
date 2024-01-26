export type MovieList = {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
};

export type MovieDetailList = {
  credits: {
    cast: Cast;
  };
  genres: {
    id: number;
    name: string
  }[];
  overview: string;
  backdrop_path: string;
  poster_path: string;
  release_date: string;
  release_dates: {
    results: {
      iso_3166_1: string;
      release_dates: {
        certification: string;
        type: number;
      }[];
    }[];
  }
  title: string;
  vote_average: number;
  imdb_id: string;
  runtime: number;
  tagline: string;
  homepage: string;
  videos: {
    results: {
      key: string;
      official: boolean;
      site: string;
      type: string;
    }[];
  }
  recommendations: {
    results: MovieList[]
  }
};

export type Cast = {
  id: number;
  character: string;
  name: string;
  profile_path: string | null;
}[];

export type Actor = {
  biography: string;
  birthday: string;
  deathday?: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
  imdb_id: string;
  movie_credits: {
    cast: MovieList[]
  }
}