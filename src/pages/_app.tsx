import * as React from 'react';

import { ConfigProvider } from 'antd';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { SWRConfig } from 'swr';

import '../styles/global-template.css';
import 'nprogress/nprogress.css';
import '../styles/global-client.css';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();

  React.useEffect(() => {
    const start = () => {
      NProgress.start();
    };
    const end = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', start);
    router.events.on('routeChangeComplete', end);
    router.events.on('routeChangeError', end);

    return () => {
      router.events.off('routeChangeStart', start);
      router.events.off('routeChangeComplete', end);
      router.events.off('routeChangeError', end);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SWRConfig>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
            colorLink: '#00b96b',
            fontSize: 12,
          },
        }}
      >
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </SWRConfig>
  );
}

export default MyApp;
