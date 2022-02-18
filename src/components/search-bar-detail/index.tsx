import React, { useState, useRef, useCallback } from 'react';

import { ReactComponent as ChevronDown } from 'assets/icons/chevronDown.svg';
import FilterBar from 'components/search-bar-detail/filter-bar';
import CheckBox from 'components/search-bar-detail/check-box';

import * as S from 'components/search-bar-detail/styles';
import COUNTRIES from 'utils/data/countries';
import CATEGORIES from 'utils/data/categories';
import VOLUMES from 'utils/data/volumes';

interface SearchBarProps {
  width?: string;
  placeholder?: string;
}

const SearchBarDetail = ({ width = '90%', placeholder = '영양제 이름 검색' }: SearchBarProps) => {
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [country, setCountry] = useState('');
  const [volume, setVolume] = useState(-1);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState({ minValue: 0, maxValue: MAX_SAFE_INTEGER });
  const [starRating, setStarRating] = useState(0);

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.currentTarget.value);
  };
  const changeCategory = (categoryName: string) => {
    if (category.includes(categoryName)) {
      const newArr = category.filter(eachCategory => eachCategory !== categoryName);
      setCategory(newArr);
    } else {
      setCategory(prev => [...prev, categoryName]);
    }
  };
  const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice({ ...price, [e.currentTarget.name]: +e.currentTarget.value.replace(/[^0-9]*$/, '') });
  };
  const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.currentTarget.value);
  };
  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(+e.currentTarget.value);
  };
  const changeBrand = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand(e.currentTarget.value);
  };
  const changeStarRating = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStarRating(+e.currentTarget.value);
  };
  const setInitialize = () => {
    setBrand('');
    setCategory([]);
    setCountry('');
    setVolume(-1);
    setPrice({ minValue: 0, maxValue: MAX_SAFE_INTEGER });
    setStarRating(0);
  };

  const searchProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      category.length === 0 &&
      country === '' &&
      volume < 0 &&
      brand === '' &&
      starRating === 0 &&
      price.minValue === 0 &&
      price.maxValue === MAX_SAFE_INTEGER
    ) {
      console.log('전송 type: string', productName);
    } else {
      console.log('전송 type: object ', {
        name: productName,
        brand,
        categories: category,
        manufacture: country,
        volume,
        price,
        rating: starRating,
      });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const toggleCollapse = useCallback(() => {
    if (containerRef.current === null || contentRef.current === null) return;
    if (isCollapseOpen) {
      containerRef.current.style.height = '0';
    } else {
      containerRef.current.style.height = `${contentRef.current.clientHeight}px`;
    }
    setIsCollapseOpen(prev => !prev);
    setInitialize();
  }, [isCollapseOpen]);

  return (
    <>
      <S.NormalSearchContainer width={width}>
        <form onSubmit={searchProduct}>
          <S.NormalSearchInput
            placeholder={placeholder}
            onChange={changeName}
            value={productName || ''}
          />
          <S.SubmitButton type='submit'>
            <S.SearchOn />
          </S.SubmitButton>
        </form>
      </S.NormalSearchContainer>
      <S.Container width={width}>
        <S.Header onClick={toggleCollapse}>
          <p>상세 검색</p>
          <ChevronDown />
        </S.Header>
        <S.ContentWrapper ref={containerRef}>
          <S.Content ref={contentRef}>
            <form autoComplete='off' onSubmit={searchProduct}>
              <FilterBar title='카테고리'>
                {CATEGORIES.map(eachCategory => {
                  return (
                    <CheckBox
                      key={eachCategory.id}
                      value={eachCategory.name}
                      onChange={() => {
                        changeCategory(eachCategory.name);
                      }}
                      name='category'
                      checked={category.includes(eachCategory.name)}
                    />
                  );
                })}
              </FilterBar>
              <FilterBar title='제조국'>
                {COUNTRIES.map(eachCountry => {
                  return (
                    <CheckBox
                      type='radio'
                      name='country'
                      value={eachCountry.name}
                      onChange={changeCountry}
                      key={eachCountry.id}
                      checked={country === eachCountry.name}
                    />
                  );
                })}
              </FilterBar>
              <FilterBar title='용량'>
                {VOLUMES.map(eachVolume => {
                  return (
                    <CheckBox
                      type='radio'
                      name='volume'
                      value={eachVolume.value}
                      onChange={changeVolume}
                      key={eachVolume.id}
                      checked={volume === eachVolume.value}
                    />
                  );
                })}
              </FilterBar>
              <FilterBar title='브랜드'>
                <S.StyledInput name='brand' onChange={changeBrand} value={brand} />
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
              <S.ButtonBox>
                <S.lightButton type='button' onClick={setInitialize}>
                  초기화
                </S.lightButton>
                <S.DarkButton type='submit'>검색</S.DarkButton>
              </S.ButtonBox>
            </form>
          </S.Content>
        </S.ContentWrapper>
      </S.Container>
    </>
  );
};

export default SearchBarDetail;

const MAX_SAFE_INTEGER = 100000000;
