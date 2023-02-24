import React from 'react';

import Layout from '@/components/common/layouts';
import Search from '@/components/routes/search';
import { NextPageWithLayout } from '@/pages/_app';

const SearchPage: NextPageWithLayout = () => {
  return <Search />;
};

export default SearchPage;
SearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout title="Search Page">{page}</Layout>;
};
