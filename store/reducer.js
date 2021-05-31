import PRODUCTS from "../data/products";

const initialState = {
  products: PRODUCTS,
  filterProducts: PRODUCTS,
  favProducts: []
};
const reducer = (state = initialState, action) => {
  if (action.type === 'THEM_VAO_YEU_THICH') {
    const existsIndex = state.favProducts.findIndex(
      item => item.id === action.productId
    );
    if (existsIndex >= 0) {
      const updatedFavProduct = [...state.favProducts];
      updatedFavProduct.splice(existsIndex, 1);
      return { ...state, favProducts: updatedFavProduct };
    } 
    else {
      const product = state.products.find(
        item => item.id === action.productId
      );
      // const updatedFavProducts=[...state.favProducts]
      // let updateData = updatedFavProducts.concat(product)
      return { ...state, favProducts: state.favProducts.concat(product)};
    }
  }

  return state;
};
export default reducer;
