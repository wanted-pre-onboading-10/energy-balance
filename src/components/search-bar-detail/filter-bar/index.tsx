import { ReactNode } from 'react';

import * as S from 'components/search-bar-detail/filter-bar/styles';

interface FilterBarProps {
  title: string;
  children?: ReactNode;
}

const FilterBar = ({ title, children }: FilterBarProps): JSX.Element => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  );
};

export default FilterBar;
