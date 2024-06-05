import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
import { AnimationWrapper } from 'react-hover-animation';

function HomeProduct(item) {
    const {
      image,
      name,
      _id,
    } = item;
  
    return (
        <section className="coffee-section-item">
        <AnimationWrapper className="animation-hover">
        <Link className="product-link-index" to={`/products/${_id}`}>
          <img
            alt={name}
            src={`/images/${image}`}
          />
          <p className="coffee-name">{name}</p>
        </Link>
        </AnimationWrapper>
        </section>
    );
  }
  
  export default HomeProduct;
  