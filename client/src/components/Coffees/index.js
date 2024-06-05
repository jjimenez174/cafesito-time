import React, { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';
// import { AnimationWrapper } from 'react-hover-animation';
// import Artisan from '../Photos/artisan-blend.png'
// import Biz from '../Photos/biz-blend.png'
// import Impressa from '../Photos/impressa-blend.png';
// import Lavazza from '../Photos/lavazza-blend.png';
// import Maverick from '../Photos/maverick-blend.png';
// import Tag from '../Photos/tag-blend.png';
import HomeProduct from '../HomeProduct';
import spinner from '../../assets/spinner.gif';




function Coffees(){

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
}

    return (
        <div id="coffee-section">
            <h2 className="wrapper">Our Coffees</h2>
            <p className="wrapper">Selection of Fragrant Aromatic Coffees from around the World</p>
            <div className="coffee-section-container"> 
           

                {state.products.length ? (
        <div className="flex-row">
          {filterProducts().slice(0,4).map((product) => (
            <HomeProduct
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
            
            {/* 
            
            <section className="coffee-section-item">
                <AnimationWrapper>
                        <img src={Artisan} alt="Artisan Blend"></img>
                        <p className="coffee-name">Artisan Blend</p>
                </AnimationWrapper>
            </section>
            
            <section className="coffee-section-item">
                <AnimationWrapper>
                        <img src={Biz} alt="Biz Blend"></img>
                        <p className="coffee-name">Biz Blend</p>
                </AnimationWrapper>
            </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Impressa} alt="Impressa Blend"></img>
                    <p className="coffee-name">Impressa Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Lavazza} alt="Lavazza Blend"></img>
                    <p className="coffee-name">Lavazza Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Maverick} alt="Maverick Blend"></img>
                    <p className="coffee-name">Maverick Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Tag} alt="Tag Blend"></img>
                    <p className="coffee-name">Tag Blend</p>
            </AnimationWrapper>
                </section> */}
            
            </div>
            <Link id="coffee-section-button" className="buttons-index" to="/shop">
                View Selection
            </Link>
        </div> 
    )
}

export default Coffees;