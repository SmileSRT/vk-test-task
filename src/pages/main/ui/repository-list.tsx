import { observer } from 'mobx-react-lite';
import { type FC, useCallback, useEffect } from 'react';
import { useStores } from '../../../app/model/store-provider';
import styles from './styles/list.module.css';
import { Card, Spin } from 'antd';
import RepositoryCard from './repository-card';
import { isLoadMoreData } from '../lib';

const RepositoryList: FC = observer(() => {
  const { repositoriesStore, paginationStore } = useStores();
  const { currentPage, onChangePage } = paginationStore;
  const { fetchRepositoriesPerPage, isLoading, items, fetchParams } =
    repositoriesStore;

  useEffect(() => {
    fetchRepositoriesPerPage(currentPage, isLoadMoreData(), fetchParams);
  }, [currentPage, fetchRepositoriesPerPage, fetchParams]);

  const handleScroll = useCallback(() => {
    if (!isLoadMoreData() || isLoading) {
      return;
    }
    onChangePage(currentPage + 1);
  }, [currentPage, onChangePage, isLoading]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading && !isLoadMoreData()) {
    return <Card loading={isLoading} />;
  }

  return (
    <>
      <ul className={styles.list}>
        {items.map(item => (
          <li key={item.id} className={styles.list__item}>
            <RepositoryCard {...item} />
          </li>
        ))}
      </ul>
      {isLoading && isLoadMoreData() && <Spin className={styles.spin} />}
    </>
  );
});

export default RepositoryList;
