import styled from 'styled-components';
import theme from 'styles/theme';

export const Container = styled.footer`
  margin-top: 72px;
  display: flex;

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;

  img {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 100%;
    margin-bottom: 32px;
  }

  @media (max-width: 483px) {
    flex-direction: column;
    place-items: center;
    img {
      margin-right: 0;
      margin-bottom: 8px;
    }
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

  @media (max-width: 483px) {
  }
`;
