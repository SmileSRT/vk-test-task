import type { FC } from 'react';
import RepositoryList from '../entities/repositories/ui/repository-list';
import FilterList from '../entities/repositories/ui/list-filter';

const App: FC = () => {
  return (
    <>
      <FilterList />
      <RepositoryList />
    </>
  );
};

export default App;
