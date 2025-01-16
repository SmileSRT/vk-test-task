import { observer } from 'mobx-react-lite';
import { type FC, useEffect } from 'react';
import { useStores } from '../../../app/store-provider';

const RepositoryCards: FC = observer(() => {
  const { repositoriesStore } = useStores();
  const { fetchRepositories, isLoading, items } = repositoriesStore;

  useEffect(() => {
    fetchRepositories(2);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
});

export default RepositoryCards;
