import * as S from "components/search-result/result-list/styles";
import ResultCard from "components/search-result/result-card/index";
//테스트용 삭제 예정
//결과값의 총 개수도 받아야 한다.
const RESULT_NUM = 138;
const TEST_ITEMS = [
  {
    name: "6년근고려홍삼정스틱",
    manufacture: "대만",
    volume: 120,
    price: 146900,
    rating: 3.8,
    image: "https://i.ibb.co/gtRrq0N/drug1.jpg",
  },
  {
    name: "마그네슘정",
    manufacture: "일본",
    volume: 120,
    price: 27800,
    rating: 4.4,
    image: "https://i.ibb.co/qD6NT0H/drug6.jpg",
  },
  {
    name: "비타민D 1000IU",
    manufacture: "미국",
    volume: 30,
    price: 157100,
    rating: 4.3,
    image: "https://i.ibb.co/qD6NT0H/drug6.jpg",
  },
];

const ResultList = (): JSX.Element => {
  return (
    <S.StyledWrapper>
      <S.StyledNumP>
        <strong>총 {RESULT_NUM}개</strong>의 검색 결과가 있습니다.
      </S.StyledNumP>
      <S.StyledListUl>
        {TEST_ITEMS.map((item, idx) => (
          <ResultCard key={idx} item={item}/>
        ))}
      </S.StyledListUl>
    </S.StyledWrapper>
  );
};

export default ResultList;
