import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.5;
  z-index: 1;
`;

const Content = styled.div`
  width: 62rem;

  background-color: ${(props) => props.theme.colors.white};
  z-index: 9999;

  @media ${(props) => props.theme.media.phone} {
    width: calc(100% - 4rem);
  }
`;

const Box = styled.div`
  padding: 3.6rem;
`;

const Title = styled.div`
  font-size: 2.4rem;
  font-weight: 700;

  padding: 0 0 3rem 0;

  @media ${(props) => props.theme.media.phone} {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  width: 30rem;

  text-align: left;
  font-size: 1.3rem;

  @media ${(props) => props.theme.media.phone} {
    width: 20rem;
  }
`;

const Image = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  width: 20rem;
  height: 20rem;

  margin: 0 0 1.5rem 0;

  object-fit: cover;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0 2rem;
`;

const Category = styled.div`
  margin: 0.5rem 0.5rem 0 0;
  padding: 0.1rem 0.5rem;

  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;

  color: ${(props) => props.theme.colors.primary};
`;

const Footer = styled.div`
  position: relative;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.colors.black};
`;

const Btn = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 0.5rem;
`;

const TextS = styled.div`
  color: ${(props) => props.theme.colors.gray500};
`;

const TextL = styled.div`
  color: ${(props) => props.theme.colors.black};
  font-weight: 700;
  font-size: 1.8rem;
  padding: 0 0 1rem 0;
`;

export {
  Container,
  Background,
  Content,
  Box,
  Title,
  Image,
  Categories,
  Category,
  Description,
  Footer,
  Btn,
  TextS,
  TextL,
  FlexDiv,
};
