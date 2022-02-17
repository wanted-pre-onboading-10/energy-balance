import styled from "styled-components";

type TabType = { isClickedTab: number; idx: number };

export const StyledSection = styled.section`
  float: right;
`;
export const StyledFormField = styled.div``;
export const StyledFieldSet = styled.fieldset`
  border: none;
  border-bottom: 1px solid black;
`;

export const StyledLabel = styled.label``;
export const StyledInputWrapper = styled.div`
  display: flex;
`;
export const StyledInput = styled.input`
  padding: 1.2rem 3.2rem 1.2rem 0;
  font-size: 2rem;
  border: none;
  font-weight: 700;
`;
export const StyledXButton = styled.button``;
export const StyledXBtnImg = styled.img``;
export const StyledSearchListWrapper = styled.div`
  padding-top: 13.6rem;
  padding-bottom: 10rem;
`;
export const StyledTabUl = styled.ul`
  margin-bottom: 3.6rem;
  border-bottom: 1px solid #bbb;
  display: flex;
`;
export const StyledTabLi = styled.button<TabType>`
  padding-bottom: 1.2rem;
  color : ${({ isClickedTab, idx }) =>
    isClickedTab === idx ? "#000000" : "#bbbbbb"};
  border-bottom : ${({ isClickedTab, idx }) =>
    isClickedTab === idx ? "2px solid black" : "none"};
  font-size: 2rem;
  line-height: 1.45;
  font-weight: 700;
  &:nth-child(2){ {
    margin-left: 4rem;
  }
`;
