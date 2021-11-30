import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import heroimage from '../assets/pictures/heroimage.jpg';
import './home.css';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'




const Home = () => {
    return (
      <div>
         <img
      className="d-block w-100"
      src={heroimage}
      alt="Name of Painting"
    />
  


      </div>
      




     
    );
  }
  

export default Home;



