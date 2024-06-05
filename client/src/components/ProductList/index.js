import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
// import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';

function ProductList() {
  // const [state, dispatch] = useStoreContext();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );

  // Function to search by product name?
  // function filterSearch(){
  //   if(!currentSearch){
  //     return state.products;
  //   }
  //   return state.products.filter(
  //     (product) => product.name.toLowerCase() === currentSearch
  //   );
  // }
  // If Category then search is gone.
  }

  const shopItems= "flex-row shop-items";

  return (
    <div id="shop-page">
      <h2>Our Products:</h2>
      {/* If no search then display all, if search then display by name match */}
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem className={shopItems}
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={parseFloat(product.price).toFixed(2)}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default ProductList;
