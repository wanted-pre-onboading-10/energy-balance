import React from 'react';

import * as S from 'components/search-bar-detail/check-box/styles';

interface CheckBoxProps {
  name: string;
  value: string | number;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const CheckBox = ({
  name,
  value,
  type = 'checkbox',
  onChange = () => {},
  checked,
}: CheckBoxProps): JSX.Element => {
  return (
    <S.Container>
      <S.StyledInput checked={checked} type={type} name={name} value={value} onChange={onChange} />
      {value}
    </S.Container>
  );
};

export default CheckBox;
