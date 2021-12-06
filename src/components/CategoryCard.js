

const CategoryCard = ({ thumbnail, name }) => {
    const { REACT_APP_BACKEND_URL } = process.env
    return (
        <div class="col">
        <div className="">
            <img
              className="card-pictures"
              src={`${REACT_APP_BACKEND_URL}${thumbnail}`}
            />
        </div>
        <h5> {name}</h5>
        <button type="button">Start Shopping</button>
        
        
        
        
      </div>
      
    )
}

export default CategoryCard