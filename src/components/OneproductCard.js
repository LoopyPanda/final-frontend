import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./Oneproductcard.css";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navigation from "./Navbar";
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const OneProduct = (props) => {

  const [image, setImage] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState()

  const { id } = useParams()
  console.log(id);
  useEffect(() => {

    setIsLoading(true)
    axios.get(`https://fathomless-depths-64916.herokuapp.com/product/${id}`)
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

      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Artprints
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Dessert</Breadcrumb.Item>
      </Breadcrumb>
      <div class="row justify-content-start ">
        <div className="col-5 ps-5 ">
          <div className="One_product_image">

            {data && data.pictures.map((picture) => {
              console.log(picture.url)
              return (
                <>
                  <img src={`https://fathomless-depths-64916.herokuapp.com/${picture.url}`} />
                </>
              );

            })}
          </div>
        </div>
        <div className="col-6 ">
          <div className="text-light text-dark ">
          {data && 
                  < p > { data.name }</p>
          }
            <p>277,00€</p>
            <label for="quantity">
              Quantity
              <input type='number'></input>
              <div className='button'>
                <Button variant="light border-warning">Add to Cart</Button>
              </div>
            </label>{" "}
            <br />
            <div className='product_description pt-5'>
              <ul>
                {data && 
                  < h2 > { data.description }</h2>
              }
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-start pt-5  ">
        <div className="col-md-2">
          <div className="border border-secondary box p-5 ">box 1</div>

        </div>
        <div className="col-md-3">
          <div className="border border-secondary box p-5">box 2</div>
        </div>

        <div className="col-md-3 share-container border">
          <div className=" p-5">Share with your loved ones
            <a href="#"><FaFacebook className='icons pb-1 pt-1' /></a>
            <a href="#"><FaInstagram className='icons pb-1 pt-1' /></a> </div>
        </div>

      </div>
    </div>
    </div >
  );
};

export default OneProduct;
