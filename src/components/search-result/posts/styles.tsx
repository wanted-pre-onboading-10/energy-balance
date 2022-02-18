import styled from 'styled-components';
// 색깔 추가 예정
export const StyledDlWrapper = styled.dl`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.gray800};
`;
export const StyledImgDt = styled.dt``;
export const StyledImg = styled.img`
  width: 10.8rem;
  height: 10.8rem;
`;
export const StyledContentDd = styled.dd`
  font-size: 1.8rem;
  line-height: 1.4;
  padding: 0 2.4rem;
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const StyledContent = styled.div`
  display: flex;
  padding-top: 3rem;
  align-items: stretch;
`;

export const StyledCntP = styled.p``;
export const StyledCntStrong = styled.strong``;
export const StyledAdditional = styled.div`
  display: flex;
  padding-top: 1rem;
  margin-bottom: 0.8rem;
`;
export const StyledStarImg = styled.img``;
export const StyledStarP = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.gray500};
  margin-left: 0.2rem;
  line-height: 1.5;
`;
export const StyledBtnDd = styled.dd`
  width: 25%;
  display: flex;
  align-items: center;
`;
export const StyledBtn = styled.button`
  border: 1px solid #000;
  border-radius: 18px;
  font-size: 1.6rem;
  width: 100%;
  line-height: 2.125;
`;
