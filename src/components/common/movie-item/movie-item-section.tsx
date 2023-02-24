import React from 'react';

import MovieItemGrid from '@/components/common/movie-item/movie-item-gird';
import MovieItemList from '@/components/common/movie-item/movie-item-list';
import { FilterType } from '@/enums/toolbar';
import { MovieItem } from '@/models/movies';

interface MovieSectionProps {
  filterType: FilterType;
  movies: MovieItem[];
}

export default function MovieItemSection({ filterType, movies }: MovieSectionProps) {
  switch (filterType) {
    case FilterType.Grid: {
      return (
        <div className="flex-wrap-movielist">
          {movies?.map((movie) => (
            <MovieItemGrid movie={movie} key={movie.id} />
          ))}
        </div>
      );
    }
    case FilterType.List: {
      return (
        <>
          {movies?.map((movie) => (
            <MovieItemList movie={movie} key={movie.id} />
          ))}
        </>
      );
    }
    default:
      return null;
  }
}
