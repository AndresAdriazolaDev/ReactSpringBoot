import { getInvoice, calculateTotal } from "./services/GetInvoice";
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

  useEffect(() => {});

  const handlerDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handlerAddItem = ({ product, price, quantity }) => {
    {
      setItems([
        ...items,
        {
          id: counter,
          product: product.trim(),
          price: +price,
          quantity: parseInt(quantity, 10),
        },
      ]);
      setCounter(counter + 1);
    }
  };

  const onActiveForm = () => {
    setActiveForm(!activeForm);
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
            <ItemDetails handlerDeleteItem={id => handlerDeleteItem(id)} items={items}>
              {" "}
            </ItemDetails>
            <TotalView total={total}></TotalView>
            <button className="btn btn-secondary" onClick={onActiveForm}>
              {!activeForm ? "Add Item" : "Hide Form"}
            </button>
            {!activeForm ? (
              ""
            ) : (
              <FormItemView handler={handlerAddItem}></FormItemView>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
