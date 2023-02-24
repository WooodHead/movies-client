import React from 'react';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import LazyLoadImage from '../images/lazy-load-image';
import { MovieItem } from '@/models/movies';

interface MovieItemGridProps {
  movie: MovieItem;
}

export default function MovieItemGrid({ movie }: MovieItemGridProps) {
  return (
    <div className="movie-item-style-2 movie-item-style-1">
      <LazyLoadImage src={movie.poster_path} alt={movie.title} />

      <Link href={`/info/${movie.id}`} passHref legacyBehavior>
        <div className="hvr-inner">
          {' '}
          <a>
            {' '}
            Read more <i className="ion-android-arrow-dropright"></i>{' '}
          </a>
        </div>
      </Link>
      <div className="mv-item-infor">
        <h6>
          <Link href={`/info/${movie.id}`}>{movie.title}</Link>
        </h6>
        <p className="rate">
          <FaStar color="#F3B50C" size={17} style={{ marginRight: '5px' }} />
          <span>{movie.vote_average}</span> /10
        </p>
      </div>
    </div>
  );
}
