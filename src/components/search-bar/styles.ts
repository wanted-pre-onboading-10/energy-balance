import styled from 'styled-components';

import { ReactComponent as SearchOnIcon } from 'assets/icons/searchOnIcon.svg';

export const Container = styled.div<{ width: string }>`
  position: relative;
  width: ${props => props.width};
`;

export const StyledInput = styled.input`
  display: block;
  padding: 1.2rem 3.5rem 1.2rem 0.5rem;
  width: 100%;
  border: 0.1rem solid transparent;
  border-bottom: 0.1rem solid #000;
  outline: 0;
  font-size: 2rem;
  font-weight: 600;

  &::placeholder {
    color: ${props => props.theme.colors.gray300};
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 5rem;
  /* line-height: 1.5; */
  /* background-color: #ccc; */
`;

export const SearchOn = styled(SearchOnIcon)``;
