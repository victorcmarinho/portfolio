/* eslint-disable @typescript-eslint/no-explicit-any */
import { IGitInfos } from 'models/gitInfosModel';

export const GitInfosMock: IGitInfos = {
  user: {
    avatarUrl: 'avatarUrl',
    bio: 'Bio',
    email: 'victorcmarinho@gmail.com',
    name: 'Victor Vinícius de Carvalho Marinho',
    repositories: {
      edges: [
        {
          node: {
            name: 'CRUD-MVC-PHP',
            url: 'https://github.com/victorcmarinho/CRUD-MVC-PHP',
            description: 'Crud em MVC e PHP',
            stargazerCount: 45,
            languages: {
              edges: [
                {
                  node: {
                    name: 'PHP',
                    __typename: 'Language' as any,
                  },
                  __typename: 'LanguageEdge' as any,
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
