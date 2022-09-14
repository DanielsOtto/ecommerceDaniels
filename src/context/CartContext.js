import React, { useState, useContext } from 'react';

/* Contexto del carrito  */
const CartContext = React.createContext([]);

export const useCart = () => { return useContext(CartContext) };

export const CartProvider = ({defaultValue = [], children}) => {

    const [cart, setCart] = useState(defaultValue);
    const array = [...cart];

    const addToCart = (item, count) => {
        console.log({...item, count});

        if(cart.find(book=> book.id === item.id)){
            console.log("objeto repetido"); 

            let index = array.findIndex((book) => book.id === item.id);
            console.log("que indice das "+index)
            console.log("aux q das  "+ array[index]);
            array[index].count += count;
            let aux = {...array[index]}; // copio el objeto
            setCart([aux]);
            console.log("count q das "+array[index].count);
        }else{
            // articulo nuevo en el carrito
            setCart([...cart, {...item, count}]);
          }
    }

    const removeAll = () => {
        setCart([]);
    }
    
    const removeOne = (id) => {
        setCart(prevState => prevState.filter(book => book.id !== id));
    }

    const context = {
        cart,
        addToCart,
        removeAll,
        removeOne
    };

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
