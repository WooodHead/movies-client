import useSWR from 'swr';

import { MovieResponse } from '@/models/movies';
import { requestClient } from '@/utils/axios';

const getMovieTrending = async (url: string) => {
  return requestClient(url, {
    method: 'GET',
  });
};

const url = '/api/movie/trending';

export const useMovieTrending = () => {
  const { data, error } = useSWR<MovieResponse>(url, getMovieTrending);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
