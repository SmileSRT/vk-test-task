import { type FC } from 'react';
import { Input, Select } from 'antd';
import styles from './styles/filter.module.css';
import { observer } from 'mobx-react-lite';
import { useStores } from '../../../app/model/store-provider';
import type {
  IFetchParams,
  orderVariantsType,
  sortVariantsType,
} from '../model/types';
import { orderVariant, sortVariant } from '../model/types';

interface ISortOptions {
  value: sortVariantsType;
  label: string;
}

interface IOrderOptions {
  value: orderVariantsType;
  label: string;
}

const sortOptions: ISortOptions[] = [
  {
    value: sortVariant.STARS,
    label: 'stars',
  },
  {
    value: sortVariant.FORKS,
    label: 'forks',
  },
  {
    value: sortVariant.ISSUES,
    label: 'issues',
  },
  {
    value: sortVariant.UPDATED,
    label: 'По дате обновления',
  },
];

const orderOptions: IOrderOptions[] = [
  {
    value: orderVariant.ASC,
    label: 'По-возрастанию',
  },
  {
    value: orderVariant.DESC,
    label: 'По-убыванию',
  },
];

const FilterList: FC = observer(() => {
  const { repositoriesStore, paginationStore } = useStores();
  const { onChangePage } = paginationStore;
  const { fetchParams, changeFetchParams } = repositoriesStore;

  const applyFilterParams = (params: IFetchParams) => {
    changeFetchParams(params);
    onChangePage(1);
  };

  return (
    <section className={styles.filter__container}>
      <Input value={fetchParams.query} disabled />
      <Select
        options={sortOptions}
        defaultValue={sortVariant.STARS}
        style={{
          width: 200,
        }}
        onChange={value => applyFilterParams({ ...fetchParams, sort: value })}
      />

      <Select
        options={orderOptions}
        defaultValue={orderVariant.DESC}
        style={{
          width: 200,
        }}
        onChange={value => applyFilterParams({ ...fetchParams, order: value })}
      />
    </section>
  );
});

export default FilterList;
