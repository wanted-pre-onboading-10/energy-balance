import * as S from "components/search-result/result-list/styles";

const RESULT_NUM = 138;

const ResultList = (): JSX.Element => {
  return (
    <S.StyledWrapper>
      <S.StyledNumP>
        <strong>총 {RESULT_NUM}개</strong>의 검색 결과가 있습니다.
      </S.StyledNumP>
      <S.StyledListUl></S.StyledListUl>
    </S.StyledWrapper>
  );
};

export default ResultList;
