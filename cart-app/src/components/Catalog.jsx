import { useItemCart } from "../hooks/useItemCart";
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
