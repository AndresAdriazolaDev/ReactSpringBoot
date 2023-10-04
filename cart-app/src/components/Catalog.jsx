import { useState } from "react";
import CartView from "./CartView";
import { CatalogView } from "./CatalogView";

const initialCartItems = sessionStorage.getItem("cart")
  ? JSON.parse(sessionStorage.getItem("cart"))
  : [];

export function Catalog() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const addProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      /*
      setCartItems([
        ...cartItems.filter((i) => i.product.id !== product.id),{product, quantity: hasItem.quantity + 1  }
      ])*/

      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      ); //mejor forma de hacerlo
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const handlerDeleteProductCart = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };
  return (
    <div className="container">
      <CatalogView handler={addProductCart} />
      {cartItems?.length <= 0 || (
        <div className="my-4 w-50">
          <CartView
            items={cartItems}
            handlerDelete={handlerDeleteProductCart}
          />
        </div>
      )}
      
    </div>
  );
}