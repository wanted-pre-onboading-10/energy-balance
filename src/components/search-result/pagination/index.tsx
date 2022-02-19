import * as S from 'components/search-result/pagination/styles';
interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: PaginationProps) => {
  const pageNumbers = [];
  const lastPageNum = Math.ceil(totalPosts / postsPerPage);
  const PREV_BTN = '<<';
  const NEXT_BTN = '>>';
  const checkIsClicked = (checkId: number) => {
    return checkId === currentPage;
  };

  if (totalPosts <= 50) {
    for (let i = 1; i <= Math.ceil(totalPosts / 10); i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage < 3) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        if (i == lastPageNum) {
          break;
        }
        pageNumbers.push(i);
      }
    }
  }

  return (
    <S.PageWrapperUl>
      <S.PagePrevli>
        <S.PageArrowBtn
          onClick={() => {
            if (currentPage - 1 > 0) paginate(currentPage - 1);
          }}>
          {PREV_BTN}
        </S.PageArrowBtn>
      </S.PagePrevli>

      {pageNumbers.map(number => (
        <S.PageWrapperli isClicked={checkIsClicked(number)} key={number}>
          <S.PageBtn
            onClick={() => paginate(number)}
            isClicked={checkIsClicked(number)}>
            {number}
          </S.PageBtn>
        </S.PageWrapperli>
      ))}
      <S.PageNextli>
        <S.PageArrowBtn
          onClick={() => {
            if (currentPage + 1 < lastPageNum) paginate(currentPage + 1);
          }}>
          {NEXT_BTN}
        </S.PageArrowBtn>
      </S.PageNextli>
    </S.PageWrapperUl>
  );
};

export default Pagination;
