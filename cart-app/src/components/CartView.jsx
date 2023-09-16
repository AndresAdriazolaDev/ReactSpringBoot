
const CartView = () => {
  return (
    <>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td>Delete</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end fw-bold">
              Total
            </td>
            <td colSpan="2" className="text-start fw-bold">
              {" "}
              123
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default CartView;
