import { PaginationStore } from '../../pages/main/model/pagination-store';
import { RepositoriesStore } from '../../pages/main/model/repositories-store';

export class RootStore {
  repositoriesStore: RepositoriesStore;
  paginationStore: PaginationStore;

  constructor() {
    this.repositoriesStore = new RepositoriesStore();
    this.paginationStore = new PaginationStore();
  }
}

export const rootStore = new RootStore();
