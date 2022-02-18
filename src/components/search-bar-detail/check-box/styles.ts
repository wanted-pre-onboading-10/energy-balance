import styled from 'styled-components';

export const Container = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 7rem;
  height: 7rem;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  position: absolute;
  top: 0%;
  width: 7rem;
  height: 7rem;
  appearance: none;

  &:checked {
    background-color: ${props => props.theme.colors.primary};
    border: 1px solid #000;
    border-radius: 50%;
    z-index: -1;
  }
`;
