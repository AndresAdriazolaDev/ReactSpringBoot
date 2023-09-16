import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "./ProductCard";
export const CatalogView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-4 my-2" key={product.id}>
            <ProductCard title={product.title} img={product.img} price={product.price} description={product.description}/>
          </div>
        ))}
      </div>
    </>
  );
};
