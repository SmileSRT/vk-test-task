import apiClient from '../../shared/api-client';
import { IRepositoriesResponse } from './types';

export class RepositoriesService {
  static async fetchList(page: number) {
    const url = `${import.meta.env.VITE_API_HOSTNAME}/search/repositories?q=javascript&sort=stars&order=desc&page=${page}`;

    const data = await apiClient.get<IRepositoriesResponse>(url);

    return data;
  }
}
