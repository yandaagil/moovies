import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const searchMovie = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}`,
    {
      params: {
        query: query,
      },
    }
  );
  return response.data.results;
};

export const getPopularMovieList = async (page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
      {
        params: {
          page: page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const getUpcomingMovieList = async (page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`,
      {
        params: {
          page: page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const getTopRatedMovieList = async (page) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
      {
        params: {
          page: page,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,credits,release_dates,recommendations`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

export const getActor = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching actor:", error);
    throw error;
  }
};
