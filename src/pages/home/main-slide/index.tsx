import React, { useState } from "react";

import useHistory from "utils/hooks/useHistory";

import * as S from "pages/home/main-slide/styles";

const MainSlide = (): JSX.Element => {
  const history = useHistory();
  const [inputFocus, setInputFocus] = useState<boolean>(false);

  const searchFocus = () => {
    setInputFocus(true);
  };

  const searchBlur = () => {
    setInputFocus(false);
  };

  const searchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    history.createNewHistory(e.currentTarget.search.value);

    alert(e.currentTarget.search.value);
    e.currentTarget.search.value = "";
  };

  const deleteHistory = (e: React.MouseEvent<HTMLDivElement>) => {
    history.deleteHistory(e.currentTarget.id);
  };

  const clickHistory = (e: React.MouseEvent<HTMLDivElement>) => {
    history.createNewHistory(e.currentTarget.id);

    alert(e.currentTarget.id);
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
          {history.getHistory().length === 0 && (
            <S.NoneHistory>최근 검색 내역이 없습니다.</S.NoneHistory>
          )}
          {history.getHistory().map((v, idx) => (
            <S.History key={idx}>
              <S.HistoryText id={v} onClick={clickHistory}>
                {v}
              </S.HistoryText>
              <S.DeleteBtn id={v} onClick={deleteHistory}>
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
