import { getInvoice } from "../services/GetInvoice";

export const InvoiceApp = () => {
  const invoice = getInvoice();
  return (
    <>
      <ul>
        <li>id: {invoice.id}</li>
        <li>name: {invoice.name}</li>
      </ul>
    </>
  );
};
