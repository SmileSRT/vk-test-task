import {
  PaginationStore,
  RepositoriesStore,
} from '../entities/repositories/store';

export class RootStore {
  repositoriesStore: RepositoriesStore;
  paginationStore: PaginationStore;

  constructor() {
    this.repositoriesStore = new RepositoriesStore();
    this.paginationStore = new PaginationStore();
  }
}

export const rootStore = new RootStore();
