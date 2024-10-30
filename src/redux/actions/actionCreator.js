/*eslint-disable*/
import { ADD_TO_CART, DELETE_PRODUCT } from './actions';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const deleteProduct = (productName) => ({
  type: DELETE_PRODUCT,
  payload: productName, 
});
// export const hideAlert = () => ({
//   type: HIDE_ALERT,
// });

// export const addToShoppingCart =(product) => ({
// type :ADD_TO_SHOPPING_CART,
// payload: product,
// })
