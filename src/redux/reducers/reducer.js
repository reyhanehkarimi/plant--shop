/*eslint-disable*/


import { ADD_TO_CART, DELETE_PRODUCT } from '../actions/actions';

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemPrice = parseFloat(action.payload.offPrice || action.payload.price);
      
      const existingItem = state.items.find(item => item.name === action.payload.name);

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, price: itemPrice, quantity: action.payload.quantity });
      }

      return {
        ...state,
        items: [...state.items],
        totalPrice: state.totalPrice + itemPrice * action.payload.quantity,
      };

    case DELETE_PRODUCT: 
      const updatedItems = state.items.filter(item => item.name !== action.payload);
      const updatedTotalPrice = updatedItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      return {
        ...state,
        items: updatedItems,
        totalPrice: updatedTotalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
