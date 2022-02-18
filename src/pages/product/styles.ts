import styled from 'styled-components';

export const Container = styled.main`
  ${props => props.theme.wrapper}
  display: flex;
`;

export const HalfContainer = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 19.2rem;
`;
