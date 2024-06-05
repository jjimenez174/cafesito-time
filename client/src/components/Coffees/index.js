import React, { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { Link } from 'react-router-dom';
// import { AnimationWrapper } from 'react-hover-animation';
// import Horiguchi from '../Photos/horiguchi.png'
// import Sapporo from '../Photos/sapporo-kan.png'
// import Komeda from '../Photos/Komeda.png';
// import Precious from '../Photos/preciousmemory.png';
// import Step from '../Photos/stepblend.png';
// import Koffee from '../Photos/koffeemameya.png';
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
            <p className="wrapper">Selection of Exotic Coffee from All Corners of World</p>
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
                        <img src={Horiguchi} alt="Horiguchi Blend"></img>
                        <p className="coffee-name">Horiguchi Blend</p>
                </AnimationWrapper>
            </section>
            
            <section className="coffee-section-item">
                <AnimationWrapper>
                        <img src={Sapporo} alt="Sapporo Blend"></img>
                        <p className="coffee-name">Sapporo Blend</p>
                </AnimationWrapper>
            </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Komeda} alt="Komeda Blend"></img>
                    <p className="coffee-name">Komeda Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Precious} alt="Precious Blend"></img>
                    <p className="coffee-name">Precious Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Step} alt="Step Blend"></img>
                    <p className="coffee-name">Step Blend</p>
            </AnimationWrapper>
                </section>
            
            
                <section className="coffee-section-item">
            <AnimationWrapper>
                    <img src={Koffee} alt="Koffee Blend"></img>
                    <p className="coffee-name">Koffee Blend</p>
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