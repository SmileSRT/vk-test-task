import { makeAutoObservable, runInAction } from 'mobx';
import { IRepository } from './types';
import { RepositoriesService } from './api.service';

export class RepositoriesStore {
  totalCount = 0;
  items: IRepository[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchRepositories = async (page: number) => {
    this.isLoading = true;
    const data = await RepositoriesService.fetchList(page);

    runInAction(() => {
      if (data) {
        this.totalCount = data.total_count;
        this.items = data.items;
      }
      this.isLoading = false;
    });
  };
}

export class PaginationStore {
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  onChange = (page: number) => {
    this.currentPage = page;
  };
}
