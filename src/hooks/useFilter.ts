import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setFilter } from 'redux/filterSlice';
import useHistory from 'hooks/useHistory';
import { FilterObj } from 'types/filter-types';
import { PRODUCT_LIST } from 'utils/products';
import { basicSearch, detailedSearch } from 'utils/search-methods';

const useFilter = () => {
  const dispatch = useAppDispatch();
  const { createNewHistory } = useHistory();

  return {
    getFilter() {
      return useAppSelector((state) => state.filter);
    },
    setNewFilter(newFilter: FilterObj | string) {
      if (typeof newFilter === 'string') {
        createNewHistory(newFilter);
      } else {
        createNewHistory(newFilter.name);
      }

      dispatch(setFilter(newFilter));
    },
    getFilteredProducts() {
      const filter = useAppSelector((state) => state.filter);

      switch (typeof filter) {
        case 'object': {
          return PRODUCT_LIST.filter((p) => detailedSearch(p, filter));
        }
        case 'string': {
          return PRODUCT_LIST.filter((p) => basicSearch(p, filter));
        }
        default:
          throw new Error(`A filter cannot be of type ${typeof filter}`);
      }
    },
  };
};

export default useFilter;
