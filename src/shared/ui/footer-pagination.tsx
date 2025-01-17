import type { FC } from 'react';
import styles from './styles/footer.module.css';
import { Pagination } from 'antd';
import { useStores } from '../../app/store-provider';
import { observer } from 'mobx-react-lite';

const FooterPagination: FC = observer(() => {
  const { paginationStore, repositoriesStore } = useStores();
  const { currentPage, onChangePage } = paginationStore;
  const { totalCount } = repositoriesStore;

  return (
    <footer className={styles.container}>
      <Pagination
        total={totalCount}
        pageSize={30}
        current={currentPage}
        onChange={onChangePage}
      />
    </footer>
  );
});

export default FooterPagination;
