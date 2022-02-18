import styled from 'styled-components';

import { ReactComponent as SearchOnIcon } from 'assets/icons/searchOnIcon.svg';

export const NormalSearchContainer = styled.div<{ width: string }>`
  position: relative;
  width: ${props => props.width};
`;

export const NormalSearchInput = styled.input`
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
`;

export const SearchOn = styled(SearchOnIcon)``;

export const Container = styled.section<{ width: string }>`
  margin-top: 4rem;
  width: ${props => props.width};
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

export const ContentWrapper = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: height 500ms ease;
`;

export const Content = styled.div``;

export const Separator = styled.div`
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

export const ButtonBox = styled.div`
  display: flex;
  flex: 1;
  margin-top: 3rem;
  height: 5.2em;
`;

export const lightButton = styled.button`
  flex: 1;
  height: 5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
`;

export const DarkButton = styled.button`
  flex: 1;
  height: 5rem;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
`;
