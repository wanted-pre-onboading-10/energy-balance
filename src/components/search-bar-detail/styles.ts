import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4rem;
  width: 90%;
  padding: 0 0.5rem;
  font-size: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #000;
  cursor: pointer;
`;

export const Content = styled.div``;

export const Separator = styled.p`
  margin: 0 3rem;
`;

export const StyledInput = styled.input`
  display: block;
  width: 12rem;
  height: 3rem;
  padding: 1rem;
  border: 1px solid ${props => props.theme.colors.gray500};
  border-radius: 0.6rem;
  outline: 0;

  &:focus {
    border: 1px solid ${props => props.theme.colors.black};
  }

  @media ${props => props.theme.media.phone} {
    width: 7rem;
  }
`;

export const StyledRangeInput = styled.input`
  width: 40%;
  height: 0.6rem;
  background: ${props => props.theme.colors.gray300};
  border-radius: 0;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-thumb {
    width: 1.2rem;
    height: 1.2rem;
    background: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: ${props => props.theme.colors.primary};
    border: 0.1rem solid ${props => props.theme.colors.primary};
    border-radius: 50%;
    -webkit-appearance: none;
    cursor: pointer;
  }
`;

export const FixedSeparator = styled(Separator)`
  display: flex;
  flex-shrink: 0;
  margin-right: 0;
`;

export const StarRating = styled.p`
  color: ${props => props.theme.colors.primary};
  width: 3rem;
`;
