import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


import Nav from "react-bootstrap/Nav";
import "./Oneproductcard.css";
import Potjie from "../assets/pictures/Potjie.png";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Navigation from "./Navbar";
import {FaInstagram, FaFacebook } from 'react-icons/fa';

const OneProduct = (props) => {
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
          <div>
            <img alt="image" className="firstpic" src={Potjie} />
          </div>
        </div>
        <div className="col-6 ">
          <div className="text-light text-dark ">
              <p className='text-warning'>Desert Artprint</p>
              <p>277,00€</p>
            <label for="quantity">
              Quantity
              <input type='number'></input>
              <div className='button'>
          <Button variant="light border-warning">Add to Cart</Button>
          </div>
            </label>{" "}
            <br />
            <div className='productinfo pt-5'>
            <ul>
              {" "}
              In publishing and graphic design,
            
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstratehygy jghfffhf
              </li>
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </li>
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </li>
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </li>
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </li>
              <li>
                Lorem ipsum is a placeholder text commonly used to demonstrate
              </li>
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
           <a href="#"><FaFacebook className='icons pb-1 pt-1'/></a> 
                           <a href="#"><FaInstagram className='icons pb-1 pt-1'/></a> </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
