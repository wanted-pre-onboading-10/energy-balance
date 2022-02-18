import styled from 'styled-components';

export const Header = styled.header`
  margin-bottom: 6rem;
  font-size: 3.6rem;
  font-weight: 700;

  @media ${props => props.theme.media.phone} {
    font-size: 2.4rem;
    padding: 0 1.2rem;
  }
`;

export const InputContainer = styled.div``;
