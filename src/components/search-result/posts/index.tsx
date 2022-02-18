import starIcon from 'assets/images/star.png';
import * as S from 'components/search-result/posts/styles';

interface PostProps {
  item: {
    name: string;
    manufacture: string;
    volume: number;
    price: number;
    rating: number;
    image: string;
  };
}

const Post = (Props: PostProps): JSX.Element => {
  const { image, manufacture, volume, price, rating, name } = Props.item;

  return (
    <S.StyledDlWrapper>
      <S.StyledImgDt>
        <S.StyledImg src={image} />
      </S.StyledImgDt>
      <S.StyledContentDd>
        <S.StyledContent>
          <S.StyledCntP></S.StyledCntP>
          <S.StyledCntStrong>{name}</S.StyledCntStrong>
          <S.StyledCntP></S.StyledCntP>
        </S.StyledContent>
        <S.StyledAdditional>
          <S.StyledStarImg src={starIcon}></S.StyledStarImg>
          <S.StyledStarP>{rating}</S.StyledStarP>
        </S.StyledAdditional>
      </S.StyledContentDd>
      <S.StyledBtnDd>
        <S.StyledBtn>자세히 보기</S.StyledBtn>
      </S.StyledBtnDd>
    </S.StyledDlWrapper>
  );
};

export default Post;
