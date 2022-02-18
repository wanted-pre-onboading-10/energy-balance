import { useEffect, useState } from "react";

import useFilter from "utils/hooks/useFilter";
import Posts from "components/search-result/posts/index";
import Pagination from "components/search-result/pagination/index";
import * as S from "components/search-result/styles";

const Result = (): JSX.Element => {
  const matchedItems = useFilter().getFilteredProducts();
  const [posts, setPosts] = useState<MatchedItemsType>(matchedItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  type MatchedItemsType = {
    name: string;
    brand: string;
    categories: string[];
    manufacture: string;
    volume: number;
    price: number;
    rating: number;
    image: string;
  }[];

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  console.log(currentPosts, "currentPosts");

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <S.StyledSection>
      <S.StyledTabUl>
        <S.StyledTabLi>제품명</S.StyledTabLi>
      </S.StyledTabUl>
      <S.StyledWrapper>
        <S.StyledNumP>
          <S.StyledNumStrong>총 {matchedItems.length}개</S.StyledNumStrong>의
          검색 결과가 있습니다.
        </S.StyledNumP>
        <S.StyledListUl>
          {currentPosts.map((item, idx) => (
            <Posts key={idx} item={item} />
          ))}
        </S.StyledListUl>
      </S.StyledWrapper>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </S.StyledSection>
  );
};

export default Result;
