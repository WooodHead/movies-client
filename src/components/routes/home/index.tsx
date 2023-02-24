import React, { useMemo } from 'react';

import { Tabs, TabsProps } from 'antd';

import MovieItemSection from '../../common/movie-item/movie-item-section';
import { Container } from '@/components/common/layouts';
import SearchHero from '@/components/common/search-hero';
import ToolbarFilter from '@/components/common/toolbar/toolbar-filter';
import useToolbar from '@/hooks/common/useToolbar';
import { useMovieTheaters } from '@/hooks/services/useMovieTheaters';
import { useMovieTopRate } from '@/hooks/services/useMovieTopRate';
import { useMovieTrending } from '@/hooks/services/useMovieTrending';

export default function Home() {
  const { filterType, onChangeFilterType } = useToolbar();
  const { data: movieTheaters } = useMovieTheaters();
  const { data: movieTrending } = useMovieTrending();
  const { data: movieTopRate } = useMovieTopRate();

  const items: TabsProps['items'] = useMemo(
    () => [
      {
        key: '1',
        label: `Now Playing`,
        children: <MovieItemSection movies={movieTrending?.results || []} filterType={filterType} />,
      },
      {
        key: '2',
        label: `Top Rated`,
        children: <MovieItemSection movies={movieTopRate?.results || []} filterType={filterType} />,
      },
    ],
    [filterType, movieTopRate?.results, movieTrending?.results]
  );

  return (
    <main>
      <SearchHero />
      <Container>
        <ToolbarFilter onChangeFilterType={onChangeFilterType} filterType={filterType} />
        <h2>In Theaters</h2>
        <MovieItemSection movies={movieTheaters?.results || []} filterType={filterType} />
        <Tabs defaultActiveKey="1" items={items} />
      </Container>
    </main>
  );
}
