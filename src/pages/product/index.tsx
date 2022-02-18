import Result from "components/search-result/index";
import * as S from "pages/product/styles";
import LeftSideSearch from "./left-side-search";

const Product = (): JSX.Element => {
  return (
    <S.Container>
      <S.HalfContainer>
        <LeftSideSearch />
      </S.HalfContainer>
      <S.HalfContainer>
        <Result />
      </S.HalfContainer>
    </S.Container>
  );
};

export default Product;
