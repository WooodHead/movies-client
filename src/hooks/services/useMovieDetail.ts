import useSWR from 'swr';

import { MovieDetailItem } from '@/models/movies';
import { requestClient } from '@/utils/axios';

const getMovieDetail = async (url: string) => {
  return requestClient(url, {
    method: 'GET',
  });
};

const url = '/api/movie/detail';

export const useMovieDetail = (id: string) => {
  const { data, error } = useSWR<MovieDetailItem>(id ? `${url}?id=${id}` : null, getMovieDetail);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
