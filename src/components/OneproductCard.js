import React from "react";
// import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import "./Oneproductcard.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import Navigation from "./Navbar";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const OneProduct = (props) => {
  const [setIsLoading] = useState(false);
  const [data, setData] = useState();

  const { id } = useParams();

  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${REACT_APP_BACKEND_URL}/product/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, REACT_APP_BACKEND_URL, setIsLoading]);

  if (!data) return <h1>Loading...</h1>;

  return (
    <div className="container-lg m-5 bigcontainer">
      <div className="container-md my-5">
        <h2 className="justify-items-center">
          Choose the type of wall Art suitable for your home according to your
          decor
        </h2>

        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/home"}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to={`/products/${id}`}>{data.name}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="oneproduct">
          <div className="row">
            <div className="col-6">
              <div className="firstpic">
                <div className="One_product_image">
                  {data && (
                    <img alt="product"
                      src={`${REACT_APP_BACKEND_URL}${data.pictures[0].url}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="text-light text-dark pricecontainer ">
              <div>
                <p className="item ml-5">
                  {data && <p className="nameandprice"> {data.name}</p>}
                </p>
                <p className="cursive nameandprice">277,00€</p>
                <div className="btnanquantity">
                  <label for="quantity">
                    Quantity
                    <input type="number"></input> <br />
                  </label>{" "}
                  <div className="addtocart">
                    <Button className="button">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>

            <br />
            <div className="productinfo ">
              {data && <p className="firstdescription"> {data.description}</p>}
            </div>
          </div>
        </div>

        <div className="container-md">
          <div className="row ">
            <div className="col-md-2 ps-1">
              <div className="box p-1 ">
                {data && (
                  <img
                    alt="logo"
                    className="pictures"
                    src={`${REACT_APP_BACKEND_URL}${data?.pictures[1]?.url}`}
                  />
                )}
              </div>
            </div>
            <div className="col-md-3">
              <div className="box p-1">
                {data?.pictures[2] && (
                  <img
                    alt="firstproduct"
                    className="pictures"
                    src={`${REACT_APP_BACKEND_URL}${data?.pictures[2]?.url}`}
                  />
                )}
              </div>
            </div>

            <div className="col-md-2 share-container">
              <div className="pt-5 mt-5 me-5 pe-5 share">
                Share with your loved ones
                <br />
                <a href="https://www.facebook.com/abish4xart" className="cursive">
                  <FaFacebook className="icons pb-1 pt-1 dark" />
                  facebook
                </a>
                <a href="https://www.instagram.com/ab_4xart/" className="cursive">
                  <FaInstagram className="icons pb-1 pt-1" />
                  Instagram
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
