import styled from 'styled-components';
import theme from 'styles/theme';

export const Article = styled.article`
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform;
  transition: all 0.2s ease-in-out;

  background-color: ${theme.buttonBackgroundColor};

  padding: 4rem;

  h2 {
    font-size: ${theme.fontSize.medium};
    margin: 8px 0 8px 0;
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: ${theme.fontSize.xsmall};
  }

  margin: 8px 0 8px 0;
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export const StarsContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;
