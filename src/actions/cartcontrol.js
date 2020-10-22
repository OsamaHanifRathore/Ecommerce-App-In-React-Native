import {ADD_TO_CART, DELETE_FROM_CART, TOTAL_BILL_OF_CART} from './types';

export const addCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const deleteFromCart = (itemTitle) => ({
  type: DELETE_FROM_CART,
  itemtitle: itemTitle,
});

export const totalBillOfCart = () => ({type: TOTAL_BILL_OF_CART,
});
