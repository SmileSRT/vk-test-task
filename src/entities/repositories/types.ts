export interface IRepositoryOwner {
  id: number;
  login: string;
  avatar_url: string;
}

export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  owner: IRepositoryOwner;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
}

export interface IRepositoriesResponse {
  total_count: number;
  incomplete_results: boolean;
  items: IRepository[];
}
