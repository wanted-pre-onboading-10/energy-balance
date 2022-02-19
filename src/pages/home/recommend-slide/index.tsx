import { useState } from 'react';

import ItemHeart from 'components/item-heart';
import Modal from 'components/modal';

import * as S from 'pages/home/recommend-slide/styles';
import { bone, stress } from 'utils/mock/recommand';
import { ProductInfo } from 'types/product';

const RecommendSlide = (): JSX.Element => {
  const [modal, setModal] = useState(false);
  const [product, setProduct] = useState<ProductInfo>();

  const handleModal = () => {
    setModal(m => !m);
  };

  const itemClick = (value: ProductInfo) => {
    setProduct(value);
    handleModal();
  };

  return (
    <>
      {modal && product && <Modal product={product} onClose={handleModal} />}
      <S.Container>
        <S.Title>
          <S.Underline>스트레스 케어</S.Underline>에
          <br />
          관심 있는 사람들의 픽!
        </S.Title>
        <S.Box>
          {stress.map((v, idx) => (
            <S.ItemBox key={idx} onClick={() => itemClick(v)}>
              <S.Item>
                <S.ItemNum>{idx + 1}</S.ItemNum>
                <S.ItemImage src={v.image} alt="recommaned" />
              </S.Item>
              <S.Info>
                <S.ItemBrand>{v.brand}</S.ItemBrand>
                <S.ItemTitle>{v.name}</S.ItemTitle>
                <ItemHeart>{v.rating.toString()}</ItemHeart>
              </S.Info>
            </S.ItemBox>
          ))}
        </S.Box>
      </S.Container>
      <S.Container>
        <S.Title>
          <S.Underline>뼈 건강</S.Underline>에
          <br />
          관심 있는 사람들의 픽!
        </S.Title>
        <S.Box>
          {bone.map((v, idx) => (
            <S.ItemBox key={idx} onClick={() => itemClick(v)}>
              <S.Item>
                <S.ItemNum>{idx + 1}</S.ItemNum>
                <S.ItemImage src={v.image} alt="recommaned" />
              </S.Item>
              <S.Info>
                <S.ItemBrand>{v.brand}</S.ItemBrand>
                <S.ItemTitle>{v.name}</S.ItemTitle>
                <ItemHeart>{v.rating.toString()}</ItemHeart>
              </S.Info>
            </S.ItemBox>
          ))}
        </S.Box>
      </S.Container>
    </>
  );
};

export default RecommendSlide;
