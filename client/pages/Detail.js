import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Cart from '../components/Cart';
//import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  //const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
 //already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    //retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

const detailContainer = "container my-1 detail";
  return (
    <>
      {currentProduct && cart ? (
        <div className={detailContainer}>
          <Link className="link-return" to="/shop">← Return to Products</Link>
          <div id="item-container"> 
              <div id="item-image">
                  <img
                    src={`/images/${currentProduct.image}`}
                    alt={currentProduct.name}
                  />
              </div>

              <div id="item-details">
                  <h2>{currentProduct.name}</h2>
                  <p>{currentProduct.description}</p>
                    <div id="item-price">Price: ${parseInt(currentProduct.price).toFixed(2)}{' '}</div>
                    <button id="item-add" onClick={addToCart}>Add to Cart</button>
                    {/* <button
                      disabled={!cart.find((p) => p._id === currentProduct._id)}
                      onClick={removeFromCart}
                    >
                      Remove from Cart
                    </button> */}
              </div>
          </div>
          
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      {/* <Cart /> */}
    </>
  );
}

export default Detail;