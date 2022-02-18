import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;

  padding: 18rem 8rem 0 8rem;

  @media ${(props) => props.theme.media.phone} {
    padding: 9rem 5rem 0 5rem;
  }
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 4rem;
  text-align: left;

  @media ${(props) => props.theme.media.phone} {
    font-size: 2.4rem;
  }
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const Box = styled.div`
  display: flex;
  height: 40rem;

  overflow-x: scroll;
  padding: 4rem 0 0 0;

  &::-webkit-scrollbar {
    display: none;
  }

  @media ${(props) => props.theme.media.phone} {
    padding: 4rem 0 0 0;
  }
`;

const ItemBox = styled.div`
  cursor: pointer;
  height: 30rem;
`;

const Item = styled.div`
  position: relative;
  width: 28rem;
  height: 19.5rem;
  border: 0.05rem solid ${(props) => props.theme.colors.black};

  @media ${(props) => props.theme.media.phone} {
    width: 24rem;
    height: 24rem;
  }
`;

const Info = styled.div`
  padding: 0 0.2rem 0 0.2rem;
`;
const ItemNum = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 4rem;
  height: 4rem;

  text-align: center;

  font-size: 1.5rem;
  line-height: 4rem;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.black};

  z-index: 1;
`;

const ItemImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 18rem;
  height: 18rem;

  border-radius: 1rem;
`;

const ItemBrand = styled.div`
  font-size: 1.4rem;
  color: #636363;
  padding: 1.6rem 0 0 0;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.2rem;
  }
`;

const ItemTitle = styled.div`
  font-size: 2rem;
  color: #252525;
  font-weight: 600;
  padding: 0.7rem 0 0 0;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.6rem;
  }
`;

export {
  Container,
  Title,
  Underline,
  Box,
  ItemBox,
  Item,
  Info,
  ItemNum,
  ItemImage,
  ItemBrand,
  ItemTitle,
};
