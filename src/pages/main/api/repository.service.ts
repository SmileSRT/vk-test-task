import apiClient from '../../../shared/api/api-client';
import { IFetchParams, IRepositoriesResponse } from '../model/types';

export class RepositoryService {
  static async fetchList(page: number, params: IFetchParams) {
    const { query, sort, order } = params;
    const url = `${import.meta.env.VITE_API_HOSTNAME}/search/repositories?q=${query}&sort=${sort}&order=${order}&page=${page}`;

    const data = await apiClient.get<IRepositoriesResponse>(url);

    return data;
  }
}
