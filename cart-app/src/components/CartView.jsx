import { useEffect, useState } from "react";
import { calculateTotal } from "../services/productService";
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'

const CartView = ({ items, handlerDelete }) => {
  const onDeleteProduct = (id) => {
    handlerDelete(id);
  };
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(calculateTotal(items));
  }, [items]);

  return (
    <>
      <table className="table table-hover   table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.product.id}>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
              <td>{item.quantity * item.product.price}</td>
              <td>
                <Button startIcon={<DeleteIcon />} disableElevation variant="contained" color="error" size="small"
                  onClick={() => onDeleteProduct(item.product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartView;
