

const CategoryCard = ({ thumbnail, name }) => {
    const { REACT_APP_BACKEND_URL } = process.env
    return (
        <div class="col">
        <div className="">
            <img
              className="card-pictures"
              src={`${REACT_APP_BACKEND_URL}${thumbnail}`}
            />
             <h5>{name}</h5>
           
        </div>
        
       
        
        
        
        
      </div>
      
    )
}

export default CategoryCard