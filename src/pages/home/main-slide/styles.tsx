import styled, { keyframes } from "styled-components";
import MainBg from "assets/images/main_bg.svg";
import SearchIcon from "assets/icons/searchOnIcon-1.svg";

const MainAnimation = keyframes`
    from {
      transform: translate(10rem, 0);
    }
    to {
      transform: translate(-10rem, 0);
    }
`;

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100vh;

  text-align: center;

  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  left: -10rem;
  top: 0px;

  width: calc(100% + 20rem);
  height: 100%;

  background: url(${MainBg}) no-repeat center 60% / calc(100% + 80rem);

  animation-duration: 15s;
  animation-name: ${MainAnimation};
  animation-iteration-count: infinite;
  animation-direction: alternate;

  z-index: -1;
`;

const Title = styled.div`
  font-family: "adobe-garamond-pro";
  font-weight: 700;
  font-size: 7.2rem;
  text-align: center;

  padding: 19.2rem 0 8rem 0;

  @media ${(props) => props.theme.media.phone} {
    font-size: 4.8rem;
  }
`;

const Search = styled.div`
  position: relative;
`;

const HistoryBox = styled.div<{ focus: boolean }>`
  display: ${(props) => (props.focus ? "block" : "none")};
  position: relative;

  left: 50%;
  transform: translateX(-50%);

  width: 45rem;

  margin: 1rem 0 1rem 0;
  padding: 2rem;

  border: 0.1rem solid ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 0.5rem 1rem #292929;

  @media ${(props) => props.theme.media.phone} {
    width: calc(100% - 8rem);
  }
`;

const History = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  font-size: 1.8rem;
  color: #636363;

  border-bottom: 0.05rem solid ${(props) => props.theme.colors.gray500};
`;

const HistoryText = styled.div`
  cursor: pointer;
`;

const DeleteBtn = styled.div`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.gray500};

  cursor: pointer;
`;

const NoneHistory = styled.div`
  font-size: 1.8rem;
  color: #636363;
`;

const InputBox = styled.form`
  position: relative;
  display: flex;
  align-items: center;

  left: 50%;
  transform: translateX(-50%);

  width: 50rem;
  height: 5rem;

  border: 0.1rem solid ${(props) => props.theme.colors.black};
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.white};

  box-shadow: 0 0.5rem 1rem #292929;

  @media ${(props) => props.theme.media.phone} {
    width: calc(100% - 4rem);
  }
`;

const Input = styled.input`
  width: 45rem;
  height: 4.8rem;

  padding: 0 2rem 0 2rem;

  border: none;
  font-size: 2rem;

  background-color: transparent;

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.media.phone} {
    width: calc(100% - 4rem);
  }
`;

const Submit = styled.button`
  width: 3rem;
  height: 3rem;

  margin: 0 0 0.5rem 0;

  background-image: url(${SearchIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export {
  Container,
  Background,
  Title,
  Search,
  HistoryBox,
  History,
  HistoryText,
  NoneHistory,
  DeleteBtn,
  InputBox,
  Input,
  Submit,
};
