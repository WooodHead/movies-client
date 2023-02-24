import React from 'react';

import dayjs from 'dayjs';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import LazyLoadImage from '../images/lazy-load-image';
import { useMovieDetail } from '@/hooks/services/useMovieDetail';
import { MovieItem } from '@/models/movies';
import { converMinutesToTimeString, formattedDate } from '@/utils/date';

interface MovieItemListProps {
  movie: MovieItem;
}

export default function MovieItemList({ movie }: MovieItemListProps) {
  const { data: movieDetail } = useMovieDetail(movie.id?.toString());
  return (
    <div className="movie-item-style-2">
      <LazyLoadImage src={movieDetail?.poster_path || ''} alt={movieDetail?.title || ''} />
      <div className="mv-item-infor">
        <h6>
          <Link href={`/info/${movie.id}`}>
            {movie.title} <span>({dayjs(movie.release_date).year()})</span>
          </Link>
        </h6>
        <p className="rate">
          <FaStar color="#F3B50C" size={17} style={{ marginRight: '5px' }} />
          <span>{movie.vote_average}</span> /10
        </p>
        <p className="describe">{movie.overview}</p>
        <p className="run-time">
          {' '}
          Run Time: {converMinutesToTimeString(movieDetail?.runtime)} . <span>MMPA: PG-13 </span> .{' '}
          <span>Release: {formattedDate(movie.release_date)}</span>
        </p>
      </div>
    </div>
  );
}
