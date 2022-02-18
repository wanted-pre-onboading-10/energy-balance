import * as S from "components/item-heart/styles";

interface ItemHeartProps {
  children: string;
}

const ItemHeart = ({ children }: ItemHeartProps): JSX.Element => {
  return (
    <S.ItemHeart>
      <S.ItemHeartIcon />
      <span>{children} 점</span>
    </S.ItemHeart>
  );
};

export default ItemHeart;
