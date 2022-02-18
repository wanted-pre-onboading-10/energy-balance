import styled from "styled-components";

type PageWrapperliType = {
  isClicked: boolean;
};

export const PageWrapperUl = styled.ul`
  margin-top: 4rem;
  display: flex;
`;
export const PagePrevli = styled.li`
  border-radius: 0.3rem 0 0 0.3rem;
  border: 1px solid #aaa;
  border-right: none;
`;
export const PageNextli = styled(PagePrevli)`
  border-right: 1px solid #aaa;
`;

export const PageWrapperli = styled(PagePrevli)<PageWrapperliType>`
  background-color: ${({ isClicked }) => {
    return isClicked ? "#aaa" : "white";
  }};
`;
export const PageArrowBtn = styled.button`
  min-width: 30px;
  line-height: 2rem;
  font-size: 1.4rem;
  color: #333;
  text-align: center;
`;

export const PageBtn = styled(PageArrowBtn)<PageWrapperliType>`
  color: ${({ isClicked }) => {
    return isClicked ? "white" : "black";
  }};
`;
