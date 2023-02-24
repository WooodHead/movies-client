import useSWR from 'swr';

import { MovieResponse } from '@/models/movies';
import { requestClient } from '@/utils/axios';

const getMovieTopRate = async (url: string) => {
  return requestClient(url, {
    method: 'GET',
  });
};

const url = '/api/movie/top-rate';

export const useMovieTopRate = () => {
  const { data, error } = useSWR<MovieResponse>(url, getMovieTopRate);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
