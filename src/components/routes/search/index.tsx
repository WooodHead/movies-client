import React from 'react';

import isArray from 'lodash/isArray';
import isEmpty from 'lodash/isEmpty';
import { useRouter } from 'next/router';

import { Container } from '@/components/common/layouts';
import MovieItemSection from '@/components/common/movie-item/movie-item-section';
import SearchHero from '@/components/common/search-hero';
import ToolbarFilter from '@/components/common/toolbar/toolbar-filter';
import useToolbar from '@/hooks/common/useToolbar';
import { useMovieSearch } from '@/hooks/services/useMovieSearch';

export default function Search() {
  const router = useRouter();
  const query = router.query.query as string;
  const { data } = useMovieSearch(query);
  const { filterType, onChangeFilterType } = useToolbar();

  if (isArray(data?.results) && isEmpty(data?.results)) {
    return (
      <main>
        <SearchHero />
        <Container>
          <div style={{ height: 600 }}>
            <h2>The resource you requested could not be found.</h2>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <SearchHero />
      <Container>
        <ToolbarFilter onChangeFilterType={onChangeFilterType} filterType={filterType} />
        <h2>In Theaters</h2>
        <MovieItemSection movies={data?.results || []} filterType={filterType} />
      </Container>
    </main>
  );
}
