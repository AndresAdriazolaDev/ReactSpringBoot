import { Navigate, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { useItemCart } from "../hooks/useItemCart";
import CartView from "./CartView";
import { CatalogView } from "./CatalogView";
import { CartRoutes } from "../routes/CartRoutes";

export function Catalog() {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemCart();

  return (
    <>
      <div className="container">
        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart}
        />
      </div>
    </>
  );
}
