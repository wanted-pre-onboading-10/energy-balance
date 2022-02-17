import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.nav`
  position: fixed;
  border-bottom: 1px solid #000;
  height: 7.2rem;
  width: 100%;
  display: flex;
  padding: 0 5.8rem;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;
export const StyledLogo = styled.a`
  padding-top: 2.4rem;
`;

export const StyledImg = styled.img``;

//mediaquery 적용 시 없어질 예정
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const StyledHomeLi = styled.a`
  padding: 3.2rem 0 1.6rem;
  line-height: 1.5;
  font-size: 1.6rem;
`;

// navLink를 styled-components에서 사용하는 것 연습
export const StyledNavLink = styled(NavLink)`
  background-color: pink;
`;

export const StyledSearchLi = styled(StyledHomeLi)`
  margin-left: 5.8rem;
`;
