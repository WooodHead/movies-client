import { PropsWithChildren } from 'react';

import Footer from './footer';
import Header from './header';

export const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="container">
      <div className="main">{children}</div>
    </div>
  );
};

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <div className="page-single">{children}</div>
      <Footer />
    </>
  );
}
