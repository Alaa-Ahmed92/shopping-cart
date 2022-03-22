

export const getProducts = state => state.productsList.productsList;
export const filteredProducts = state => state.productsList.filteredProducts;
export const getProductsPending = state => state.productsList.pending;
export const getProductsError = state => state.productsList.error;
export const getSize = state => state.productsList.size;
export const getSort = state => state.productsList.sort;