import * as S from "components/nav-bar/styles";

const NavBar = (): JSX.Element => {
  return (
    <S.StyledHeader>
      <S.StyledLogo>
        {/* a 태그 링크로 변경 예정 */}
        <S.StyledImg src="https://aimee.kr/resources/images/logo_36.svg"></S.StyledImg>
      </S.StyledLogo>
      <S.StyledUl>
        {/* 링크로 변경 예정 */}
        <S.StyledHomeLi> 홈</S.StyledHomeLi>
        <S.StyledSearchLi>검색</S.StyledSearchLi>
      </S.StyledUl>
    </S.StyledHeader>
  );
};

export default NavBar;
