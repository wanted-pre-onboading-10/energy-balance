import styled from 'styled-components';
import { Link } from 'react-router-dom';

type PathType = {
  path: string;
};

export const StyledHeader = styled.nav`
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid #000;
  height: 7.2rem;
  width: 100%;
  display: flex;
  padding: 0 5.8rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  @media ${({ theme }) => theme.media.phone} {
    height: 6.4rem;
    border-bottom: none;
    padding: 0 2rem;
  }
`;
export const StyledLogo = styled(Link)`
  padding-top: 2.4rem;
`;

export const StyledImg = styled.img`
  @media ${({ theme }) => theme.media.phone} {
    height: 2.4rem;
    width: 8.6rem;
    padding: 0;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.media.phone} {
    display: none;
  }
`;
export const StyledHomeLi = styled(Link)<PathType>`
  border-bottom: ${({ path }) => {
    console.log(path, 'path');
    return path === '/' ? '2px solid black' : 'none';
  }};
  padding: 3.2rem 0 1.6rem;
  line-height: 1.5;
  font-size: 1.6rem;
`;

export const StyledSearchLi = styled(Link)<PathType>`
  margin-left: 5.8rem;
  padding: 3.2rem 0 1.6rem;
  line-height: 1.5;
  font-size: 1.6rem;
  border-bottom: ${({ path }) => {
    console.log(path, 'path');
    return path === '/search-results' ? '2px solid black' : 'none';
  }};
`;
