import {
  ADD_TO_CART,
  DELETE_FROM_CART
} from '../actions/types';

const initialState = {
  cartList: [],
 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        
        cartList: state.cartList.concat({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          imageUrl: action.payload.imageUrl,
        }),
        
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList.filter(
          (item) => item.name !== action.itemtitle,
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
