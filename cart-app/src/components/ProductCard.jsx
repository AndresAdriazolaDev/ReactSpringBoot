const ProductCard = ({title,img,description,price}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <img src={`${img}`} className="card-img-top" height="200px" />
          <p className="card-text">{description} </p>
          <p className="card-text">{price}</p>
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
