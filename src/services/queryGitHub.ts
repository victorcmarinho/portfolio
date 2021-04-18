import { gql } from '@apollo/client';

export const GET_GIT_INFOS = gql`
  {
    viewer {
      avatarUrl
      bio
      email
      name
      repositories(
        orderBy: { field: UPDATED_AT, direction: DESC }
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
