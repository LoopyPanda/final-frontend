import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import "./Products.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Navigation from "./Navbar";
// import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";


const Products = (props) => {

    // const [setIsLoading] = useState(false)
    const [categoryData, setCategoryData] = useState()

    const { REACT_APP_BACKEND_URL } = process.env

    const { id } = useParams()

    useEffect(() => {
        //setIsLoading(true)
        axios.get(`${REACT_APP_BACKEND_URL}/product/picture-by-category/${id}`)
            .then((response) => {
                setCategoryData(response.data[0])
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id, REACT_APP_BACKEND_URL]);

    return (
        <div className="container-lg m-5 bigcontainer">
            <h2 className="justify-items-center">
                Choose the type of wall  Art suitable for your home according to your decor.
            </h2>

            {categoryData && <Breadcrumb>
                <Breadcrumb.Item><Link to={"/home"}>Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to={`/products/${id}`}>{categoryData.category_name}s</Link></Breadcrumb.Item>
            </Breadcrumb>}

            {!categoryData ? (
                <div className="row">
                    <div className="col">
                        <h1>Loading...</h1>
                    </div>
                </div>
            ) : (
                <div className="row">

                    {categoryData.urls.filter(item => {
                        return item.url.includes(categoryData.category_name)
                    }).map((item, index) => {
                        return <div key={index} className="col">
                            <div className='category_picture_container'>
                                <Link to={`/product/${item.product_id}`} key={index}>
                                    <img alt="product" className="pictures" src={`https://fathomless-depths-64916.herokuapp.com${item.url}`} />
                                </Link>
                                <span className="priceofproduct">Price: {categoryData.category_price} €</span>
                            </div>
                        </div>
                    })}
                </div>
            )}


        </div>
    );
};

export default Products;

