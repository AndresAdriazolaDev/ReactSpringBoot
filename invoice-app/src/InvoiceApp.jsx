import { getInvoice } from "./services/GetInvoice";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ItemDetails } from "./components/ItemsDetails";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {
  const { id, name, client, total, items: initialItems } = getInvoice();

  const [formItemState, setFormItemState] = useState({
    product: "",
    price: "",
    quantity: "",
  });

  const { product, price, quantity } = formItemState;

  const [counter, setCounter] = useState(4);
  const [items, setItems] = useState(initialItems);

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
      setItems([
        ...items,
        {
          id: counter,
          product: product.trim(),
          price: +price,
          quantity: parseInt(quantity, 10),
        },
      ]);

      setFormItemState({
        product: "",
        price: "",
        quantity: "",
      });
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header">Invoice</div>
          <div className="card-body">
            <InvoiceDetails id={id} name={name} />
            <div className="row my-4">
              <div className="col">
                <ClientDetails client={client} />
              </div>
              <div className="col">
                <h3>Company Data</h3>
                <CompanyDetails client={client} />
              </div>
            </div>

            <h4>Products</h4>
            <ItemDetails items={items}> </ItemDetails>
            <TotalView total={total}></TotalView>

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
          </div>
        </div>
      </div>
    </>
  );
};
