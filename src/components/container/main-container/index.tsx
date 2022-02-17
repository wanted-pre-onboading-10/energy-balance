import * as S from "components/container/main-container/styles";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const MainContainer = ({ children }: Props): JSX.Element => {
  return (
    <S.StyledContainer>
      <S.Title>{WORDS.title}</S.Title>
      <S.SubTitle>{WORDS.subTitle}</S.SubTitle>

      {children}
    </S.StyledContainer>
  );
};

const WORDS = {
  title: "들어온 요청",
  subTitle: "파트너님께 딱 맞는 요청서를 찾아보세요.",
};

export default MainContainer;
