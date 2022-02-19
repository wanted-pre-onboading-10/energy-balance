import React, { useState } from "react";

import useHistory from "hooks/useHistory";

import * as S from "pages/home/main-slide/styles";
import { useNavigate } from "react-router-dom";
import useFilter from "hooks/useFilter";

const MainSlide = (): JSX.Element => {
  const navigation = useNavigate();
  const { getHistory, deleteHistory } = useHistory();
  const { setNewFilter } = useFilter();
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const searchFocus = () => {
    setInputFocus(true);
  };

  const searchBlur = () => {
    setInputFocus(false);
  };

  const pushResultPage = (str: string) => {
    setNewFilter(str);
    navigation("/search-results", { replace: true });
  };

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    pushResultPage(e.currentTarget.search.value);
  };

  const deleteSearchHistory = (e: React.MouseEvent<HTMLDivElement>) => {
    deleteHistory(e.currentTarget.id);
  };

  const clickHistory = (e: React.MouseEvent<HTMLDivElement>) => {
    pushResultPage(e.currentTarget.id);
  };

  return (
    <S.Container>
      <S.Title>
        Care me,
        <br />
        Aimee!
      </S.Title>
      <S.Search tabIndex={1} onFocus={searchFocus} onBlur={searchBlur}>
        <S.InputBox onSubmit={searchSubmit} autoComplete="off">
          <S.Input type="text" name="search" required />
          <S.Submit />
        </S.InputBox>
        <S.HistoryBox focus={inputFocus}>
          {getHistory().length === 0 && (
            <S.NoneHistory>최근 검색 내역이 없습니다.</S.NoneHistory>
          )}
          {getHistory().map((v, idx) => (
            <S.History key={idx}>
              <S.HistoryText id={v} onClick={clickHistory}>
                {v}
              </S.HistoryText>
              <S.DeleteBtn id={v} onClick={deleteSearchHistory}>
                x
              </S.DeleteBtn>
            </S.History>
          ))}
        </S.HistoryBox>
      </S.Search>
      <S.Background />
    </S.Container>
  );
};

export default MainSlide;
