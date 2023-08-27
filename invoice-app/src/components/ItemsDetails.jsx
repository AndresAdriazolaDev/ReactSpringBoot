import { RowItemDetails } from "./RowItemView";

export const ItemDetails = ({ items }) => {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemDetails
              key={id}
              product={product}
              price={price}
              quantity={quantity}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
