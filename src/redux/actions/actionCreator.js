/*eslint-disable*/
import { ADD_TO_CART, DELETE_PRODUCT } from './actions';
// import { ADD_TO_SHOPPING_CART } from './actions';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteProduct = (productName) => ({
  type: DELETE_PRODUCT,
  payload: productName, // Ensure this is the correct payload structure
});
// export const hideAlert = () => ({
//   type: HIDE_ALERT,
// });

// export const addToShoppingCart =(product) => ({
// type :ADD_TO_SHOPPING_CART,
// payload: product,
// })
