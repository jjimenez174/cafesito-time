import React, { useContext } from 'react'
import './Shop.css'
import { StoreContext } from '../../Context/StoreContext'
import ShopItem from '../../components/ShopItem/ShopItem'
const Shop = () => {
    const {shop_list} = useContext(StoreContext)
  return (
    <div className='shop-display' id='shop-display'>
        <h2>Coffee and Accessories</h2>
        <div className="shop-display-list">
            {shop_list.map((item,index)=>{
                return <ShopItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })}
        </div>

    </div>
  )
}

export default Shop
