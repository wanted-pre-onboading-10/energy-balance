import SearchBarDetail from 'components/search-bar-detail';
import * as S from 'pages/product/left-side-search/styles';

const LeftSideSearch = (): JSX.Element => {
  return (
    <>
      <S.Header>
        <p>궁금하신 영양제의</p>
        <p>제품명을 입력해주세요.</p>
      </S.Header>
      <SearchBarDetail />
    </>
  );
};

export default LeftSideSearch;
