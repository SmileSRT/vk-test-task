import { makeAutoObservable, runInAction } from 'mobx';
import {
  orderVariant,
  sortVariant,
  type IFetchParams,
  type IRepository,
} from './types';
import { RepositoryService } from '../api/repository.service';

export class RepositoriesStore {
  totalCount = 0;
  items: IRepository[] = [];
  isLoading = false;
  fetchParams: IFetchParams = {
    query: 'javascript',
    sort: sortVariant.STARS,
    order: orderVariant.DESC,
  };

  constructor() {
    makeAutoObservable(this);
  }

  fetchRepositoriesPerPage = async (
    page: number,
    isLoadMoreData: boolean,
    fetchParams: IFetchParams,
  ) => {
    this.isLoading = true;
    const data = await RepositoryService.fetchList(page, fetchParams);

    runInAction(() => {
      if (data) {
        this.totalCount = data.total_count;
        this.items = isLoadMoreData
          ? [...this.items, ...data.items]
          : data.items;
      }
      this.isLoading = false;
    });
  };

  deleteItem = (id: number) => {
    this.items = this.items.filter(item => item.id !== id);
  };

  changeFetchParams = (fetchParams: IFetchParams) => {
    this.fetchParams = fetchParams;
  };

  saveItem = (id: number, login: string, description: string) => {
    this.items = this.items.map(item => {
      if (item.id === id) {
        item.owner.login = login;
        item.description = description;
      }

      return item;
    });
  };
}
