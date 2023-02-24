import React from 'react';

import Layout from '@/components/common/layouts';
import MovieDetail from '@/components/routes/info';
import { NextPageWithLayout } from '@/pages/_app';

const MovieDetailPage: NextPageWithLayout = () => {
  return <MovieDetail />;
};

export default MovieDetailPage;
MovieDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
