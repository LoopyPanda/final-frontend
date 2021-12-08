import "./ProductLink.css";
import { Link } from "react-router-dom";

const ProductLink = ({ id }) => {

    return (
        <div class="container">
            <div class="row row-cols-6">
                <div className="categorybutton">
                    <Link to={`/products/${id}`} className="productLink-button navbar-brand" type="button">
                        Start Shopping
                    </Link>
                </div>
            </div>
        </div>

    )
}
export default ProductLink