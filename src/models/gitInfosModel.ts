export interface IGitInfos {
  user: User;
}

export interface User {
  avatarUrl: string;
  bio: string;
  email: string;
  name: string;
  repositories: Repositories;
  __typename: string;
}

export interface Repositories {
  edges: RepositoriesEdge[];
  __typename: string;
}

export interface RepositoriesEdge {
  node: PurpleNode;
  __typename: PurpleTypename;
}

export enum PurpleTypename {
  RepositoryEdge = 'RepositoryEdge',
}

export interface PurpleNode {
  name: string;
  url: string;
  description: null | string;
  stargazerCount: number;
  languages: Languages;
  __typename: FluffyTypename;
}

export enum FluffyTypename {
  Repository = 'Repository',
}

export interface Languages {
  edges: LanguagesEdge[];
  __typename: LanguagesTypename;
}

export enum LanguagesTypename {
  LanguageConnection = 'LanguageConnection',
}

export interface LanguagesEdge {
  node: FluffyNode;
  __typename: TentacledTypename;
}

export enum TentacledTypename {
  LanguageEdge = 'LanguageEdge',
}

export interface FluffyNode {
  name: string;
  __typename: StickyTypename;
}

export enum StickyTypename {
  Language = 'Language',
}
