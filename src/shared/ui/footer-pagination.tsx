import type { FC } from 'react';
import styles from './styles/footer.module.css';
import { Pagination } from 'antd';

const FooterPagination: FC = () => {
  return (
    <footer className={styles.container}>
      <Pagination />
    </footer>
  );
};

export default FooterPagination;
