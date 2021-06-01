
import PRODUCTS from "../data/products";

const initialState = {
  products: PRODUCTS,
  filterProducts: PRODUCTS,
  favProducts: [],
};


const reducer = (state = initialState, action) => {
  if (action.type === "THEM_VAO_YEU_THICH") {
    const existsIndex = state.favProducts.findIndex(
      (item) => item.id === action.productId
    );

    const isFav =state.favProducts.some(item=>item.id===action.productId);
    console.log(isFav);

    if (existsIndex >= 0) {
      const updatedFavProduct = [...state.favProducts];
      updatedFavProduct.splice(existsIndex, 1);
      return { ...state, favProducts: updatedFavProduct };
    } else {
      const product = state.products.find(
        (item) => item.id === action.productId
      );
      // const updatedFavProducts=[...state.favProducts]
      // let updateData = updatedFavProducts.concat(product)
      return { ...state, favProducts: state.favProducts.concat(product) };
    }
   
  }
  // if(isFav >= 0){
  //   return { ...state, favProducts: state.favProducts.concat(product) };
  // }
  else{

  }
  if (action.type === "SET_FILTER") {
    const appliedFilters = action.Filters;
    console.log(appliedFilters);
    const updateFilteredProducts = state.products.filter(item => {
      if (appliedFilters.isBrandNew !== item.isBrand) return false;
      if (appliedFilters.isSale !== item.isSale) return false;
      return true;
    }
    
    );
    return { ...state, filterProducts: updateFilteredProducts };
  }
  return state;
};
export default reducer;
