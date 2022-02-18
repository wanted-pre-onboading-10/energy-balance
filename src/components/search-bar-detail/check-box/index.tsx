import * as S from 'components/search-bar-detail/check-box/styles';

interface CheckBoxProps {
  name: string;
  value: string | number;
  type?: string;
}

const CheckBox = ({ name, value, type = 'checkbox' }: CheckBoxProps): JSX.Element => {
  return (
    <S.Container>
      <S.StyledInput type={type} name={name} value={value} />
      {value}
    </S.Container>
  );
};

export default CheckBox;
