import React from 'react';
import './Instagram.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './grid.css';





const Instagram = () => {
    return (<div class="container lg my-5">
        <div>
         <h2 className='cursive'>Are you on Instagram ? Follow me @ab_4xart</h2>
  


      </div>
    <div class="row">
      <div class="col">
        <div className="p-5 border border-secondary">
        pic1
          
        </div>
        <p>name</p>
       
        
      </div>
      <div class="col">
        <div className="p-5 border border-secondary">
        pic2
          
        </div>
        <p>name</p>
       
        
      </div>
      <div class="col">
        <div className="p-5 border border-secondary">
        pic3
          
        </div>
        <p>name</p>
       
        
      </div>
      <div class="col">
        <div className="p-5 border border-secondary">
        pic4
          
        </div>
        <p>name</p>
       
        
      </div>
      
     
      </div>
     
  
  </div>
      
      




     
    );
  }
  

export default Instagram;