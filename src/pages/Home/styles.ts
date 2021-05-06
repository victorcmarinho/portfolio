import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 1232px;

  @media (max-width: 990px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  max-width: 490px;
  max-height: calc(100vh - 32px - 32px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 32px;

  p {
    margin-top: 32px;
  }

  @media (max-width: 990px) {
    max-width: 100%;
    margin-bottom: 10px;
    position: initial;
    top: initial;
  }
`;

export const RightSide = styled.div`
  max-width: 675px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 990px) {
    max-width: 100%;
  }
`;
