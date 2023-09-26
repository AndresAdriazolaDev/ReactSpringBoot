export const RowItemDetails = ({
  id,
  product,
  price,
  quantity,
  handlerDeleteItem,
}) => {
  return (
    <>
      <tr>
        <td>{product}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => handlerDeleteItem(id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};
