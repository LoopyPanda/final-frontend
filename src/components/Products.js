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
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Navigation from "./Navbar";
// import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Products = (props) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const { id } = useParams()
    console.log(id);
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://fathomless-depths-64916.herokuapp.com/product/picture-by-category/${id}`)
            .then((response) => {
                console.log(response);
                setData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id]);
    console.log(data);

    return (

        <div className="container-lg m-5 bigcontainer">
            <h2 className="justify-items-center">
                Choose the type of wall  Art suitable for your home according to your decor. 
            </h2>
            <div class="row">
                <div className="col">
                    <div className="images">
                    {data && data[0].array_agg.filter(item => {
                        return item.url
                        // .includes('artprint')
                    }).map(item =>{
                            console.log(item)
                            return <img className="pictures" src={`https://fathomless-depths-64916.herokuapp.com${item.url}`}/>
                    })}
            </div>
            </div>

            <div className="row pt-1">
                    <div className='nameofproduct'>
                        {data && data.map(price => {
                            // console.log(price)
                            return <p className="priceofproduct">Price: {price.category_price} € for each Product</p>
                        })}
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Products;

