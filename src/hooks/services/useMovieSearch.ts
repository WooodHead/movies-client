import useSWR from 'swr';

import { MovieResponse } from '@/models/movies';
import { requestClient } from '@/utils/axios';

const movieSearch = async (url: string) => {
  return requestClient(url, {
    method: 'GET',
  });
};

const url = '/api/movie/search';

export const useMovieSearch = (query: string) => {
  const { data, error, isLoading } = useSWR<MovieResponse>(query ? `${url}?query=${query}` : null, movieSearch);
  return {
    data,
    error,
    isLoading,
  };
};
