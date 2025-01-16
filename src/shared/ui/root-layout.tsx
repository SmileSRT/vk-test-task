import type { FC, PropsWithChildren } from 'react';
import Header from './header';
import FooterPagination from './footer-pagination';
import styles from './styles/layout.module.css';
import './styles/index.css';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <FooterPagination />
    </>
  );
};

export default RootLayout;
