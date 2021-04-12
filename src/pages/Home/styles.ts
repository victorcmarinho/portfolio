import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  padding: 32px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  max-width: 1232px;
`;

export const LeftSide = styled.div`
  max-width: 408px;
  max-height: calc(100vh - 32px - 32px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: sticky;
  top: 32px;

  p {
    margin-top: 32px;
  }
`;

export const RightSide = styled.div`
  max-width: 675px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
