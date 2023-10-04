import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const ProductCard = ({
  handler,
  title,
  img,
  description,
  price,
  id,
}) => {
  const onAddProduct = (product) => {
    handler(product);
  };
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={`${img}`} className="card-img-top" height="200px" />
          <p className="card-text">{description} </p>
          <p className="card-text">${price}</p>
          <Button
            endIcon={<AddShoppingCartIcon />}
            onClick={() => onAddProduct({ id, title, description, price })}
            variant="contained" color="primary" disableElevation
          >
            Add Item
          </Button>
        </div>
      </div>
    </>
  );
};
