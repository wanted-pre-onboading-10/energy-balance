import * as S from 'components/search-bar/styles';

interface SearchBarProps {
  width?: string;
  placeholder?: string;
}

const SearchBar = ({
  width = '90%',
  placeholder = '영양제 이름 검색',
}: SearchBarProps): JSX.Element => {
  return (
    <S.Container width={width}>
      <form>
        <S.StyledInput placeholder={placeholder} />
        <S.SubmitButton type='submit'>
          <S.SearchOn />
        </S.SubmitButton>
      </form>
    </S.Container>
  );
};

export default SearchBar;
