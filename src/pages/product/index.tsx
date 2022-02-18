import Result from 'components/search-result/index';
import useFilter from 'hooks/useFilter';
import * as S from 'pages/product/styles';
import LeftSideSearch from './left-side-search';

const Product = (): JSX.Element => {
  const matchedItems = useFilter().getFilteredProducts();
  return (
    <S.Container>
      <S.HalfContainer>
        <LeftSideSearch />
      </S.HalfContainer>
      <S.HalfContainer>
        <Result matchedItems={matchedItems} />
      </S.HalfContainer>
    </S.Container>
  );
};

export default Product;
