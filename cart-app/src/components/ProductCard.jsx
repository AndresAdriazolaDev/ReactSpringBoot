export const ProductCard = ({
  handler,
  id,
  title,
  img,
  description,
  price,
}) => {
  const onAddProduct = (product) => {
    console.log(product);
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
            className="btn btn-primary"
            onClick={() => onAddProduct({ title, price, description, id })}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};
