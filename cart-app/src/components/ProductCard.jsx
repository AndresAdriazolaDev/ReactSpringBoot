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
          <button
            onClick={() => onAddProduct({ id, title, description, price })}
            className="btn btn-primary"
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};
