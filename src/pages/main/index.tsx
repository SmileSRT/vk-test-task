import type { FC } from 'react';
import FilterList from './ui/list-filter';
import RepositoryList from './ui/repository-list';

const MainPage: FC = () => {
  return (
    <>
      <FilterList />
      <RepositoryList />
    </>
  );
};

export default MainPage;
