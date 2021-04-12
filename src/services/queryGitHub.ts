import { gql } from '@apollo/client';

export const GET_GIT_INFOS = gql`
  query GetGitInfos {
    user(login: "victorcmarinho") {
      avatarUrl
      bio
      email
      name
      repositories(
        orderBy: { field: STARGAZERS, direction: DESC }
        last: 100
        affiliations: OWNER
      ) {
        edges {
          node {
            name
            url
            description
            stargazerCount
            languages(first: 5) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;
