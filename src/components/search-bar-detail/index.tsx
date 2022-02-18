import React, { useState } from 'react';

import { ReactComponent as ChevronDown } from 'assets/icons/chevronDown.svg';
import FilterBar from './filter-bar';

import * as S from 'components/search-bar-detail/styles';
import CheckBox from './check-box';

const SearchBarDetail = () => {
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [volume, setVolume] = useState(-1);
  const [price, setPrice] = useState({ minValue: 0, maxValue: MAX_SAFE_INTEGER });
  const [starRating, setStarRating] = useState(0);

  const changeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.currentTarget.value);
  };
  const changeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
    // setCategory(prev => )
  };
  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, [e.currentTarget.name]: e.currentTarget.value.replace(/[^0-9]*$/, '') });
  };
  const changeStarRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarRating(+e.currentTarget.value);
  };

  return (
    <S.Container>
      <S.Header>
        <p>상세 검색</p>
        <ChevronDown />
      </S.Header>
      <S.Content>
        <form>
          <FilterBar title='카테고리'>
            <CheckBox name='category' value='비타민' />
            <CheckBox name='category' value='칼슘' />
            <CheckBox name='category' value='미네랄' />
            <CheckBox name='category' value='콜라겐' />
            <CheckBox name='category' value='아연' />
            <CheckBox name='category' value='오메가' />
            <CheckBox name='category' value='유산균' />
            <CheckBox name='category' value='홍삼' />
            <CheckBox name='category' value='마그네슘' />
            <CheckBox name='category' value='종합영양제' />
            <CheckBox name='category' value='혈당' />
            <CheckBox name='category' value='혈행' />
            <CheckBox name='category' value='배변' />
            <CheckBox name='category' value='면역' />
            <CheckBox name='category' value='다이어트' />
            <CheckBox name='category' value='식이섬유' />
            <CheckBox name='category' value='감기' />
            <CheckBox name='category' value='미백' />
            <CheckBox name='category' value='스트레스' />
            <CheckBox name='category' value='간' />
            <CheckBox name='category' value='눈' />
            <CheckBox name='category' value='관절' />
          </FilterBar>
          <FilterBar title='브랜드'>
            <S.StyledInput name='brand' onChange={changeBrand} value={brand} />
          </FilterBar>
          <FilterBar title='제조국'>
            <CheckBox type='radio' name='country' value='한국' />
            <CheckBox type='radio' name='country' value='독일' />
            <CheckBox type='radio' name='country' value='미국' />
            <CheckBox type='radio' name='country' value='중국' />
            <CheckBox type='radio' name='country' value='대만' />
            <CheckBox type='radio' name='country' value='일본' />
          </FilterBar>
          <FilterBar title='용량'>
            <CheckBox type='radio' name='volume' value={15} />
            <CheckBox type='radio' name='volume' value={30} />
            <CheckBox type='radio' name='volume' value={60} />
            <CheckBox type='radio' name='volume' value={120} />
            <CheckBox type='radio' name='volume' value={240} />
          </FilterBar>
          <FilterBar title='가격'>
            <S.StyledInput name='minValue' onChange={changePrice} value={price.minValue} />
            <S.Separator>~</S.Separator>
            <S.StyledInput name='maxValue' onChange={changePrice} value={price.maxValue} />
          </FilterBar>
          <FilterBar title='별점'>
            <S.StyledRangeInput
              name='starRating'
              value={starRating}
              onChange={changeStarRating}
              type='range'
              min='0'
              max='5'
              step='0.5'
            />
            <S.FixedSeparator>
              <S.StarRating>{starRating}</S.StarRating>
              /5 이상
            </S.FixedSeparator>
          </FilterBar>
        </form>
        <button>초기화</button>
        <button>검색</button>
      </S.Content>
    </S.Container>
  );
};

export default SearchBarDetail;

const MAX_SAFE_INTEGER = 100000000;
