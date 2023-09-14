import { RowItemDetails } from "./RowItemView";

export const ItemDetails = ({ items, handlerDeleteItem }) => {
  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, product, price, quantity }) => (
            <RowItemDetails
              key={id}
              id={id}
              product={product}
              price={price}
              quantity={quantity}
              handlerDeleteItem={(id) => handlerDeleteItem(id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
