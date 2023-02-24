import { PropsWithChildren } from 'react';

import Head from 'next/head';

import Footer from './footer';
import Header from './header';

export interface LayoutProps {
  title?: string;
  ogTitle?: string;
  description?: string;
  ogDescription?: string;
  keywords?: string;
}

export const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
};

export default function Layout({ children, title, ogTitle, ogDescription, description, keywords }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        {title && <title property="title">{title}</title>}
        {ogTitle && <meta property="og:title" content={title} key="title" />}
        {description && <meta name="description" content={description} key="description" />}
        {ogDescription && <meta property="og:description" content={ogDescription} key="og:description" />}
        {keywords && <meta name="keywords" content={keywords} key="keywords" />}
      </Head>
      <Header />
      <div className="page-single">{children}</div>
      <Footer />
    </>
  );
}
