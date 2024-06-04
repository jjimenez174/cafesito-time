//import { useReducer } from 'react';
import {
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    UPDATE_CART_QUANTITY,
    REMOVE_FROM_CART,
    ADD_MULTIPLE_TO_CART,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY,
    CLEAR_CART,
    TOGGLE_CART,
    UPDATE_SEARCH,
    UPDATE_CURRENT_SEARCH,
} from './actions';
  
//set initial states for all key defined actions from the below reducer function
  const initialState = {
    products: [],
    cart: [],
    certOpen: false,
    categories: [],
    currentCategory: '',
    search: [],
    currentSearch: '',
};
//initial state for the reducer
  export default function reducer (state = initialState, action){
    switch (action.type) {
      case UPDATE_PRODUCTS:
        return {
          ...state,
          products: [...action.products], //update products with new list
        };
//adding single product to the cart
      case ADD_TO_CART:
        return {
          ...state,
          cartOpen: true,
          cart: [...state.cart, action.product], 
        };
//adding multiple products to the cart
      case ADD_MULTIPLE_TO_CART:
        return {
          ...state,
          cart: [...state.cart, ...action.products],
        };
//updating the quantity of a product in the cart
      case UPDATE_CART_QUANTITY:
        return {
          ...state,
          cartOpen: true,
          cart: state.cart.map((product) => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity;
            }
            return product;
          }),
        };
//removing a product from the cart
      case REMOVE_FROM_CART:
        let newState = state.cart.filter((product) => {
          return product._id !== action._id;
        });

        return {
          ...state,
          cartOpen: newState.length > 0,
          cart: newState,
        };
//clearing the cart  
      case CLEAR_CART:
        return {
          ...state,
          cartOpen: false,
          cart: [],
        };
//toggling the cart open/close state  
      case TOGGLE_CART:
        return {
          ...state,
          cartOpen: !state.cartOpen,
        };
//updating the category  
      case UPDATE_CATEGORIES:
        return {
          ...state,
          categories: [...action.categories],
        };
//updating the current category
      case UPDATE_CURRENT_CATEGORY:
        return {
          ...state,
          currentCategory: action.currentCategory,
        };
//updating the search results
      case UPDATE_SEARCH:
        return {
          ...state,
          search: [...action.search],
        };
//updating the current search term
      case UPDATE_CURRENT_SEARCH:
        return {
          ...state,
          currentSearch: action.currentSearch,
        };
//return the current state 
      default:
        return state;
    }
  };
  
  export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
  }