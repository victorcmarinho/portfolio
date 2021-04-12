import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.footer`
  margin-top: 72px;
  display: flex;

  img {
    width: 4.8rem;
    height: 4.8rem;
    margin-right: 32px;
    border-radius: 100%;
  }
`;

export const ListLink = styled.ul`
  display: flex;

  li {
    margin-left: 16px;
    margin-right: 16px;

    list-style: none;
    padding: 0;

    place-self: center;

    a {
      display: flex;
      place-content: center;
      color: inherit;
      text-decoration: inherit;
      font-size: ${theme.fontSize.medium};

      svg {
        margin-right: 16px;
      }
    }
  }
`;
