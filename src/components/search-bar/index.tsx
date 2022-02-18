import React, { useState } from 'react';

import * as S from 'components/search-bar/styles';

interface SearchBarProps {
  width?: string;
  placeholder?: string;
}

const SearchBar = ({
  width = '90%',
  placeholder = '영양제 이름 검색',
}: SearchBarProps): JSX.Element => {
  const [productName, setProductName] = useState('');
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.currentTarget.value);
  };

  const searchProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('전송할 것', productName);
  };

  return (
    <S.Container width={width}>
      <form onSubmit={searchProduct}>
        <S.StyledInput placeholder={placeholder} onChange={changeName} value={productName || ''} />
        <S.SubmitButton type='submit'>
          <S.SearchOn />
        </S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default SearchBar;
