import { createContext, useEffect, useState } from "react";
import { shop_list , menu_list } from "../assets/assets";

export const StoreContext = createContext();

const StoreContextProvider = (props) => {
   const currency = "$";
   const deliveryCharge = 5;
   const [cartItems,setCartItems] = useState({});

   const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
        setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    }
    else {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
        await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
    }
}

const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (token) {
        await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
    }
}

const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        try {
          if (cartItems[item] > 0) {
            let itemInfo = shop_list.find((product) => product._id === item);
            totalAmount += itemInfo.price * cartItems[item];
        }  
        } catch (error) {
            
        }
        
    }
    return totalAmount;
}

  
    const contextValue = {
        menu_list, 
        shop_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        currency,
        deliveryCharge
     
    };
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
