import * as S from 'components/nav-bar/styles';
import { useLocation } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  const { pathname } = useLocation();

  return (
    <S.StyledHeader>
      <S.StyledLogo to="/">
        <S.StyledImg src="https://aimee.kr/resources/images/logo_36.svg"></S.StyledImg>
      </S.StyledLogo>
      <S.StyledUl>
        <S.StyledHomeLi to="/" path={pathname}>
          홈
        </S.StyledHomeLi>
        <S.StyledSearchLi to="/search-results" path={pathname}>
          제품 목록
        </S.StyledSearchLi>
      </S.StyledUl>
    </S.StyledHeader>
  );
};

export default NavBar;
