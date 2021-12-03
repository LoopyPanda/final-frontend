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
      <div class="row">
        
          <div className='firstpic '>
          <div className="One_product_image"> 
          {/* remember to check class */}

{data && <img src={`${data.pictures[0].url}`} />
}

            
          </div>
        </div>
        <div className="col ">
          
          <div className="text-light text-dark pricecontainer ">
            <div >
              <p className='item ml-5'>{data && 
                  < p className='nameandprice' > { data.name }</p>
          }</p>
              <p className='cursive nameandprice'>277,00€</p>
              <div className='btnanquantity'>
            <label for="quantity">
              Quantity
              <input type='number'></input> <br/>
              </label>{" "}
              <div className='addtocart'>
              
          <Button className='button' >Add to Cart</Button>
          </div>
          
          
          
          
            
            </div>
            </div>
            </div>
            
            <br />
            <div className='productinfo '>
          
            {data && 
                  <p className='firstdescription'> { data.description }</p>
              }
         
          </div>
        </div>
      

      <div className="row pt-3  ">
        
        

        <div className="row justify-content-start pt-1">
          <div className="col-md-2">
            <div className="box p-1 ">
{data && <img className='pictures' src={`https://fathomless-depths-64916.herokuapp.com/${data.pictures[1].url}`} />
}</div>
           
            
            
          </div>
          <div className="col-md-3">
            <div className="box p-1">
{data && <img className='pictures' src={`https://fathomless-depths-64916.herokuapp.com/${data.pictures[2]?.url}`} />
}</div>
          </div>
          
          <div className="col-md-2 share-container">
            <div className="pt-5 mt-5 me-5 pe-5 share">Share with your loved ones 
            <br/><a href="#" className='cursive'><FaFacebook className='icons pb-1 pt-1 dark'/>facebook</a>
                           <a href="#" className='cursive'><FaInstagram className='icons pb-1 pt-1'/>Instagram</a> </div>
          </div>
          
         
        </div>

      </div>
      </div>
      </div>
    
  );
};

export default OneProduct;
