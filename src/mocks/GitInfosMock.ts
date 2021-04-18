/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGitInfos } from 'models/gitInfosModel';

export const GitInfosMock: IGitInfos = {
  viewer: {
    avatarUrl:
      'https://avatars.githubusercontent.com/u/15037403?u=8a002e9cc8b39a6af28df5f913bf0def81ac5a6b&v=4',
    bio:
      'Desenvolvedor Front End, Apaixonado por Javascript, TypeScript, Angular, React, React Native, NodeJS e atualmente Flutter',
    email: 'victorcmarinho@gmail.com',
    name: 'Victor Vinícius de Carvalho Marinho',
    repositories: {
      edges: [
        {
          node: {
            name: 'portfolio',
            url: 'https://github.com/victorcmarinho/portfolio',
            description: 'My portfolio',
            stargazerCount: 0,
            languages: {
              edges: [
                {
                  node: {
                    name: 'Shell',
                    __typename: 'Language' as any,
                  },
                  __typename: 'LanguageEdge' as any,
                },
                {
                  node: {
                    name: 'JavaScript',
                    __typename: 'Language',
                  },
                  __typename: 'LanguageEdge',
                },
                {
                  node: {
                    name: 'HTML',
                    __typename: 'Language',
                  },
                  __typename: 'LanguageEdge',
                },
                {
                  node: {
                    name: 'TypeScript',
                    __typename: 'Language',
                  },
                  __typename: 'LanguageEdge',
                },
              ],
              __typename: 'LanguageConnection' as any,
            },
            __typename: 'Repository' as any,
          },
          __typename: 'RepositoryEdge' as any,
        },
      ],
      __typename: 'RepositoryConnection',
    },
    __typename: 'User',
  },
};
