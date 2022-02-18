import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setFilter } from 'redux/filterSlice';
import { products } from 'utils/products';

interface Filter {
  name: string;
  brand: string;
  categories: string[];
  manufacture: string;
  volume: number;
  price: number;
  rating: number;
}

const useFilter = () => {
  const dispatch = useAppDispatch();

  return {
    setNewFilter(filterObj: Filter) {
      dispatch(setFilter(filterObj));
    },
    getFilteredProducts() {
      const filter = useAppSelector((state) => state.filter);
      return products.filter((p) => {
        return (
          p.name.includes(filter.name) &&
          p.brand.includes(filter.brand) &&
          filter.categories.every((c) => p.categories.includes(c)) &&
          p.manufacture.includes(filter.manufacture) &&
          p.volume >= filter.volume &&
          p.price <= filter.price &&
          p.rating >= filter.rating
        );
      });
    },
  };
};

export default useFilter;
