import "./ProductLink.css";
import { Link } from "react-router-dom";

const ProductLink = ({id})=>{

    return(
        <div>
    <Link to={`/products/${id}`} className="productLink-button" type="button">
        Start Shopping
    </Link>
    </div>

    )
}
export default ProductLink