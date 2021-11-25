import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import heroimage from '../assets/pictures/heroimage.jpg';
import './home.css';



const Home = () => {
    return (
      <div className="Hero">

<Carousel style={{ height: '10rem'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={heroimage}
      alt="Name of Painting"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Picture 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Picture3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




      </div>
    );
  }
  

export default Home;



