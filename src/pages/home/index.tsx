import * as S from "pages/home/styles";

import MainSlide from "pages/home/main-slide";
import RecommendSlide from "pages/home/recommend-slide";

const Home = (): JSX.Element => {
  return (
    <S.Container>
      <MainSlide />
      <RecommendSlide />
    </S.Container>
  );
};

export default Home;
