import { makeAutoObservable } from 'mobx';

export class PaginationStore {
  currentPage = 1;

  constructor() {
    makeAutoObservable(this);
  }

  onChangePage = (page: number) => {
    this.currentPage = page;
  };
}
