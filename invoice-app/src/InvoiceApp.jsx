import { getInvoice } from "./services/GetInvoice";
import { ClientDetails } from "./components/ClientDetails";
import { CompanyDetails } from "./components/CompanyDetails";
import { InvoiceDetails } from "./components/InvoiceDetails";
import { ItemDetails } from "./components/ItemsDetails";
import { TotalView } from "./components/TotalView";
import { useState } from "react";

export const InvoiceApp = () => {
  const { id, name, client, total, items: initialItems } = getInvoice();
  console.log(initialItems);

  const [productValue, setproductValue] = useState("");
  const [quantityValue, setQuantityValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);

  const [items, setItems] = useState(initialItems);

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

            <form
              className="w-50"
              onSubmit={(event) => {
                event.preventDefault();
                setItems([
                  ...items,
                  {
                    id: 4,
                    product: productValue,
                    price: priceValue,
                    quantity: quantityValue,
                  },
                ]);

                setproductValue("");
                setPriceValue(0);
                setQuantityValue(0);
              }}
            >
              <input
                type="text"
                name="product"
                placeholder="Product"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setproductValue(event.target.value);
                }}
              ></input>
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setPriceValue(event.target.value);
                }}
              ></input>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="form-control m-3"
                onChange={(event) => {
                  console.log(event.target.value);
                  setQuantityValue(event.target.value);
                }}
              ></input>
              <button type="submit" className="btn btn-primary">
                Create item
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
