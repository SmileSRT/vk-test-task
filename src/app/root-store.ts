import { RepositoriesStore } from '../entities/repositories/store';

export class RootStore {
  repositoriesStore: RepositoriesStore;

  constructor() {
    this.repositoriesStore = new RepositoriesStore();
  }
}

export const rootStore = new RootStore();
