import * as S from "components/nav-bar/styles";

const NavBar = (): JSX.Element => {
  const CUR_PATH = window.location.pathname;
  return (
    <S.StyledHeader>
      <S.StyledLogo to="/">
        <S.StyledImg src="https://aimee.kr/resources/images/logo_36.svg"></S.StyledImg>
      </S.StyledLogo>
      <S.StyledUl>
        <S.StyledHomeLi to="/" path={CUR_PATH}>
          홈
        </S.StyledHomeLi>
        <S.StyledSearchLi to="/product" path={CUR_PATH}>
          검색
        </S.StyledSearchLi>
      </S.StyledUl>
    </S.StyledHeader>
  );
};

export default NavBar;
