import apiClient from '../../shared/api-client';
import type { IFetchParams, IRepositoriesResponse } from './types';

export class RepositoriesService {
  static async fetchList(page: number, params: IFetchParams) {
    const { query, sort, order } = params;
    const url = `${import.meta.env.VITE_API_HOSTNAME}/search/repositories?q=${query}&sort=${sort}&order=${order}&page=${page}`;

    const data = await apiClient.get<IRepositoriesResponse>(url);

    return data;
  }
}
