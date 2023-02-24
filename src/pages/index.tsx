import React from 'react';

import Layout from '@/components/common/layouts';
import Home from '@/components/routes/home';
import { NextPageWithLayout } from '@/pages/_app';

const HomePage: NextPageWithLayout = () => {
  return <Home />;
};

export default HomePage;
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Block Buster Film Review">{page}</Layout>;
};
