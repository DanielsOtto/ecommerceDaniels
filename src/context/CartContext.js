import React, { useState, useContext } from 'react';

/* Contexto del carrito  */
const CartContext = React.createContext([]);

export const useCart = () => { return useContext(CartContext) };

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const array = [...cart];

    const addToCart = (item, count) => {

        if(cart.find(book=> book.id === item.id)){

            let index = array.findIndex((book) => book.id === item.id);
            array[index].count += count;
            let aux = {...array[index]}; // copio el objeto
            setCart([aux]);
            
        }else{
            // articulo nuevo en el carrito
            setCart([...cart, {...item, count}]);
          }
    }

    const totalItemsCarrito = ()=> {
        return array.reduce((current, obj) => current + obj.count , 0);
    }

    const removeAll = () => {
        return setCart([]); 
    }
    
    const removeOne = (id) => {
        return setCart(prevState => prevState.filter(book => book.id !== id));
    }

    const totalPrice = ()=> {
        return array.reduce((current, obj)=> current + obj.precio*obj.count ,0);
    }

    const context = {
        cart,
        addToCart,
        removeAll,
        removeOne,
        totalItemsCarrito,
        totalPrice
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
