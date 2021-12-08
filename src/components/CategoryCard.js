const CategoryCard = ({ thumbnail, name, }) => {
  const { REACT_APP_BACKEND_URL } = process.env;
  return (
    <div className="col">
      <div className="">
        <img
          className="card-pictures"
          alt="thumbnail"
          src={`${REACT_APP_BACKEND_URL}${thumbnail}`}
        />
        <h5>{name}</h5>
        {/* <button type="button1">Start Shopping</button> */}
      </div>
    </div>
  );
};

export default CategoryCard;
