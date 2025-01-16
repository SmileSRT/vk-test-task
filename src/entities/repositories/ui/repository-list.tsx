import { observer } from 'mobx-react-lite';
import { type FC, useEffect } from 'react';
import { useStores } from '../../../app/store-provider';
import styles from './styles/list.module.css';
import { Card } from 'antd';
import RepositoryCard from './repository-card';

const RepositoryList: FC = observer(() => {
  const { repositoriesStore, paginationStore } = useStores();
  const { currentPage } = paginationStore;
  const { fetchRepositories, isLoading, items } = repositoriesStore;

  useEffect(() => {
    fetchRepositories(currentPage);
  }, [currentPage, fetchRepositories]);

  if (isLoading) {
    return <Card loading={isLoading} />;
  }

  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.list__item}>
          <RepositoryCard {...item} />
        </li>
      ))}
    </ul>
  );
});

export default RepositoryList;
