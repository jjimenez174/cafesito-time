import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreShop from '../../components/ExploreShop/ExploreShop'

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <ExploreShop category ={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
