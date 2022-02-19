import { useState } from 'react';

import Modal from 'components/modal';
import starIcon from 'assets/images/star.png';
import { ProductInfo } from 'types/product';
import * as S from 'components/search-result/posts/styles';

interface PostProps {
  item: ProductInfo;
}

const Post = (Props: PostProps): JSX.Element => {
  const { item } = Props;
  const { image, name, rating } = item;
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(m => !m);
  };

  return (
    <>
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
          <S.StyledBtn onClick={handleModal}>자세히 보기</S.StyledBtn>
        </S.StyledBtnDd>
      </S.StyledDlWrapper>
      {modal && <Modal product={item} onClose={handleModal} />}
    </>
  );
};

export default Post;
