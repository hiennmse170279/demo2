import React, { createContext, useEffect, useState } from 'react'
export const ShopContext = createContext(null);



function ShopContextProvider({children}) {
    const [listBeatContext, setListBeatContext] = useState([]);
    const [viewBeatFirstTime, setViewBeatFirstTime] = useState(0);
    const [countCart, setCountCart] = useState(0);

    
    const getDefaultCart = () => {
        console.log(listBeatContext)
        if(!listBeatContext){
            return;
        }
        console.log(123)
        let cart = {};
        // for(let i = 1; i < listBeat.length + 1; i++){
        //     cart[i] = 0;
        // }
        for(let i = 1; i < listBeatContext.length + 1; i++){
        listBeatContext.forEach(beat => {
            cart[beat.id] = 0
        })};
        return cart;
    };
    
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const setDefaultCart = () => {
        setCartItems(getDefaultCart());
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                
                let itemInfo = listBeatContext.find((product) => product.id === Number(item));
                
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 1}));
        if(cartItems[itemId] !== 1)
        setCountCart(countCart + 1)
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: 0}));
        setCountCart(countCart - 1)
    }
    const checkOut = () => {
        setCartItems(getDefaultCart());
        setCountCart(0)
    }

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        checkOut,
        setListBeatContext,
        listBeatContext,
        setDefaultCart,
        viewBeatFirstTime,
        setViewBeatFirstTime,
        countCart,
    };
    console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
        {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider