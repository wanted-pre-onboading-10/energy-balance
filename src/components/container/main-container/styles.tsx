import styled from "styled-components";

export const StyledContainer = styled.div`
  ${(props) => props.theme.Wrapper}
  margin-top: 4rem;
  min-width: 33rem;
  @media screen and (max-width: ${(props) => props.theme.media.girdLarge}rem) {
    padding: 0 2rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 3.2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-family: "Noto Sans KR";
  font-weight: 600;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.gray3};
`;

export const SubTitle = styled.h3`
  font-family: "Noto Sans KR";
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.gray3};
`;
