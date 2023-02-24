import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

import { MovieResponse } from '@/models/movies';
import { requestClient } from '@/utils/axios';

const getMovieTheaters = async (url: string) => {
  return requestClient(url, {
    method: 'GET',
  });
};

const url = '/api/movie/theaters';

export const useMovieTheatersWithMutation = () => {
  const { trigger, isMutating, data, reset } = useSWRMutation<MovieResponse>(url, getMovieTheaters);

  return {
    getMemberDetail: trigger,
    isLoading: isMutating,
    data,
    reset,
  };
};

export const useMovieTheaters = () => {
  const { data, error } = useSWR<MovieResponse>(url, getMovieTheaters);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
