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
      <h2 className="justify-items-center">
        Choose the type of wall Art suitable for your home according to your
        decor
      </h2>
      
      <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Artprints
  </Breadcrumb.Item>
  <Breadcrumb.Item href="#">Dessert</Breadcrumb.Item>
</Breadcrumb>
      <div class="row justify-content-start ">
        <div className="col-5 ps-5 ">
          <div className='firstpic'>
            
          </div>
        </div>
        <div className="col-7">
          
          <div className="text-light text-dark pricecontainer">
            <div classname='desertArtprint'>
              <p className='item ml-5'>Desert Artprint</p>
              <p className='cursive'>277,00€</p>
            <label for="quantity">
              Quantity
              <input type='number'></input> <br/>
              
          <Button className='button' >Add to Cart</Button>
          
          
          
            </label>{" "}
            </div>
            </div>
            
            <br />
            <div className='productinfo '>
            <ul>
              {" "}
              In publishing and graphic design,
            
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp</li>
            
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
          
          <div className="col-md-2 share-container">
            <div className="pt-5 mt-5 me-5 pe-5 share">Share with your loved ones 
            <br/><a href="#" className='cursive'><FaFacebook className='icons pb-1 pt-1 dark'/>facebook</a>
                           <a href="#" className='cursive'><FaInstagram className='icons pb-1 pt-1'/>Instagram</a> </div>
          </div>
          
         
        </div>
      </div>
    
  );
};

export default OneProduct;
