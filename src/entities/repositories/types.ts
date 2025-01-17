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

export interface IFetchParams {
  query: string;
  sort: sortVariantsType;
  order: orderVariantsType;
}

export const sortVariant = {
  STARS: 'stars',
  FORKS: 'forks',
  ISSUES: 'help-wanted-issues',
  UPDATED: 'updated',
} as const;

export const orderVariant = {
  ASC: 'asc',
  DESC: 'desc',
} as const;

export type sortVariantsType = (typeof sortVariant)[keyof typeof sortVariant];

export type orderVariantsType =
  (typeof orderVariant)[keyof typeof orderVariant];
