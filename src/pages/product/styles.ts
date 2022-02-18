import styled from 'styled-components';

export const Container = styled.main`
  ${props => props.theme.wrapper}
  display: flex;

  @media ${props => props.theme.media.phone} {
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const HalfContainer = styled.section`
  display: flex;
  max-width: calc(${props => props.theme.wrapSize} / 2);
  flex-direction: column;
  margin-top: 19.2rem;
  padding: 0 0.7rem;

  @media ${props => props.theme.media.phone} {
    align-items: center;
    justify-content: center;
    max-width: none;
    width: 100%;
    margin-top: 5rem auto 0;
  }
`;
