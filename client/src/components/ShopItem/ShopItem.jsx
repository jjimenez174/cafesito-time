import React, { useContext } from 'react';
import './ShopItem.css';
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';

const ShopItem = ({ id, name, price, image }) => {
    const {cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    return (
        <div className="shop-item">
            <div className="shop-item-img-container">
                <img className='shop-item-image' src={image} alt="" />
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src ={assets.add_icon} alt ="" />
                :<div className="shop-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.minus_brown_icon} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_brown_icon} alt="" />
                </div>  
                }
            </div>
            <div className="shop-item-info">
                <p>{name}</p>
            </div>
            <p className="shop-item-price">${price}</p>
        </div>
    )
}

export default ShopItem;