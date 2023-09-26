import { useState } from "react";
import CartView from "./components/CartView";
import { CatalogView } from "./components/CatalogView";

const initialCartItems = [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProduct = (product) => {
    setCartItems([
      ...cartItems,
      {
        product,
        quantity: 1,
        total: product.price * 1,
      },
    ]);
  };

  return (
    <>
      <div className="container">
        <CatalogView handler={handlerAddProduct} />

        <div className="my-4 w-50">
          <CartView items={cartItems} />
        </div>
      </div>
    </>
  );
};
