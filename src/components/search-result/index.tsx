import { useState } from "react";

import * as S from "components/search-result/styles";
import ResultList from "components/search-result/result-list";

const TABS = ["제품명", "브랜드명"];

const Result = (): JSX.Element => {
  const [isClickedTab, setIsClickedTab] = useState(0);

  return (
    <S.StyledSection>
      <S.StyledFormField>
        <S.StyledFieldSet>
          <S.StyledLabel></S.StyledLabel>
          <S.StyledInputWrapper>
            <S.StyledInput
              id="nutrients"
              placeholder="브랜드명 또는 영양제 이름 검색"
            ></S.StyledInput>
            <S.StyledXButton>
              <S.StyledXBtnImg
                src="https://aimee.kr/resources/images/icon/ic_close_off.svg"
                alt="취소 버튼"
              ></S.StyledXBtnImg>
            </S.StyledXButton>
          </S.StyledInputWrapper>
        </S.StyledFieldSet>
      </S.StyledFormField>
      <S.StyledSearchListWrapper>
        <S.StyledTabUl>
          {TABS.map((tab, idx) => (
            <S.StyledTabLi
              onClick={() => {
                setIsClickedTab(idx);
              }}
              key={idx}
              idx={idx}
              isClickedTab={isClickedTab}
            >
              {tab}
            </S.StyledTabLi>
          ))}
        </S.StyledTabUl>
        {/* <ResultList /> */}
      </S.StyledSearchListWrapper>
    </S.StyledSection>
  );
};

export default Result;
