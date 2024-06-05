import React from "react";
import Hero from "../components/Hero";
import Coffees from "../components/Coffees";
import Supplies from "../components/Supplies";
// import Recommendation from "../components/Recommendation";
// import Banner from "../components/Banner";
// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/CategoryMenu";
// import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Hero />
      <Coffees />
      <Supplies />
      <Recommendation /> 
      <Banner />
      <Cart/> 
      
    </>
  );
};

export default Home;