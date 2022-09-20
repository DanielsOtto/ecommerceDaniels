import Cart from "../assets/images/ic8-carrito.png";
import { useCart } from "../context/CartContext";

export const CartWidget = () => {

  const {totalItemsCarrito} = useCart();
  
  return (
    <div>
        <img src= {Cart} alt="Logo de la empresa"/>
        <p className="cart-total">{totalItemsCarrito()}</p>
    </div>
  )
}
