import { useState } from "react";
export const FormItemView = ({ handler }) => {
  const [formItemState, setFormItemState] = useState({
    product: "",
    price: "",
    quantity: "",
  });
  const { product, price, quantity } = formItemState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormItemState({
      ...formItemState,
      [name]: value,
    });
  };

  const onInvoiceItemSubmit = (event) => {
    {
      event.preventDefault();

      if (product.trim().length <= 1) return;
      if (price.trim().length <= 1) return;
      if (quantity.trim().length < 1) return;

      handler(formItemState);

      setFormItemState({
        product: "",
        price: "",
        quantity: "",
      });
    }
  };
  return (
    <>
      <form className="w-50" onSubmit={onInvoiceItemSubmit}>
        <input
          type="text"
          name="product"
          value={product}
          placeholder="Product"
          className="form-control m-3"
          onChange={onInputChange}
        ></input>
        <input
          type="number"
          name="price"
          min="1"
          value={price}
          placeholder="Price"
          className="form-control m-3"
          onChange={onInputChange}
        ></input>
        <input
          type="number"
          name="quantity"
          min="1"
          value={quantity}
          placeholder="Quantity"
          className="form-control m-3"
          onChange={onInputChange}
        ></input>
        <button type="submit" className="btn btn-primary m-3  ">
          New item
        </button>
      </form>
    </>
  );
};
