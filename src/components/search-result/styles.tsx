import styled from "styled-components";

export const StyledSection = styled.section`
  width: 50%;
  float: right;
  margin-top: 6.8rem;
  @media ${({ theme }) => theme.media.phone} {
    position: static;
    width: 100%;
    padding: 0 2rem;
  }
`;
export const StyledTabUl = styled.ul`
  margin-top: 6.8rem;
  margin-bottom: 3.6rem;
  border-bottom: 1px solid #bbb;
  display: flex;
`;
export const StyledTabLi = styled.button`
  padding-bottom: 1.2rem;
  // 색깔 추가 예정
  color: "#bbbbbb";
  line-height: 1.45;
  font-weight: 700;
  font-size: 2rem;
`;

export const StyledWrapper = styled.div``;
export const StyledNumP = styled.p`
  margin-bottom: 2.4rem;
  font-size: 2rem;
`;
export const StyledNumStrong = styled.strong``;
export const StyledListUl = styled.li``;
