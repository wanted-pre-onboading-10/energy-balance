import Portal from "portal";
import * as S from "components/modal/styles";
import addComma from "utils/addComma";
import ItemHeart from "components/item-heart";
import { ProductInfo } from "types/product";

interface ModalProps {
  product: ProductInfo;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ product, onClose }: ModalProps): JSX.Element => {
  return (
    <Portal>
      <S.Container>
        <S.Content>
          <S.Box>
            <S.Title>{product.name}</S.Title>
            <S.Description>
              <S.Image src={product.image} alt="product" />
              <div>
                <S.FlexDiv>
                  <S.TextS>{product.manufacture}</S.TextS>
                  <S.TextS>{product.brand}</S.TextS>
                </S.FlexDiv>
                <S.TextL>{product.name}</S.TextL>
                <S.FlexDiv>
                  <div>{addComma(product.price)} 원</div>
                  <S.TextS>{product.volume} 일분</S.TextS>
                </S.FlexDiv>
                <S.Categories>
                  {product.categories.map((v, idx) => (
                    <S.Category key={idx}>{v}</S.Category>
                  ))}
                </S.Categories>
                <ItemHeart>{product.rating.toString()}</ItemHeart>
              </div>
            </S.Description>
          </S.Box>
          <S.Footer>
            <S.Btn type="button" onClick={onClose}>
              닫기
            </S.Btn>
          </S.Footer>
        </S.Content>
        <S.Background />
      </S.Container>
    </Portal>
  );
};

export default Modal;
