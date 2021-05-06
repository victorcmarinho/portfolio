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
    margin-top: 16px;
    flex-direction: column;
    place-items: center;
    img {
      margin-right: 0;
      margin-bottom: 8px;
    }
  }
`;

export const ListLink = styled.ul`
  display: grid;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 16px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 140px));
  width: 100%;
  place-items: center;
  place-content: center;

  li {
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
