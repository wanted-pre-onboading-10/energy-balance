import { FilterObj, ProductObj } from 'types/filter-types';

export const basicSearch = (product: ProductObj, filter: string) => {
  return (
    product.name.includes(filter) ||
    product.brand.includes(filter) ||
    product.categories.some((c) => c.includes(filter)) ||
    product.manufacture.includes(filter)
  );
};

export const detailedSearch = (product: ProductObj, filter: FilterObj) => {
  return (
    product.name.includes(filter.name) &&
    product.brand.includes(filter.brand) &&
    filter.categories.every((c) => product.categories.includes(c)) &&
    product.manufacture.includes(filter.manufacture) &&
    product.volume >= filter.volume &&
    product.price <= filter.price.max &&
    product.price >= filter.price.min &&
    product.rating >= filter.rating
  );
};
