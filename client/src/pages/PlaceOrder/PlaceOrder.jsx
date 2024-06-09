import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'


const PlaceOrder = () => {

  const {currency, getTotalCartAmount, deliveryCharge} = useContext(StoreContext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        <input type="text" placeholder='Street Address'/>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
          <input type="text" placeholder='Country' />
          <input type="text" placeholder='Zip Code' />
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount()===0?0:deliveryCharge}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b></div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder
