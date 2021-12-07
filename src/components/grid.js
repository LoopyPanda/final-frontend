import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./grid.css";
import quote_image from "../assets/pictures/quote_image.jpg";
import { Link } from "react-router-dom";

const Grid = () => {
  const [randomPictures, setRandomPictures] = useState();
  const { REACT_APP_BACKEND_URL } = process.env;

  useEffect(() => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/product/random-pictures`)
      .then((response) => {
        setRandomPictures(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!randomPictures) return null;

  return (
    <div>
      {/* container 1 */}
      <div class="container lg my-5">
        {/* row 1 */}
        <div class="row">
        {/* col 1 of 1 */}
          <div class="col-6 sm={8}>sm=8">
            <div className="p-5">
              <Link to={`/product/${randomPictures[0].id}`}>
                <img className='random-picturesone' src={`${REACT_APP_BACKEND_URL}${randomPictures[0].url} `} alt="product" />
              </Link>
            </div>
          </div>
          {/* col 1 of 2 */}
          <div class="col-5 sm={4}>sm=4">
            <div className="p-5">
              <Link to={`/product/${randomPictures[1].id}`}>
                <img className='random-picturestwo' src={`${REACT_APP_BACKEND_URL}${randomPictures[1].url} `} alt="product" />
              </Link>
            </div>
          </div>
        </div>

        {/* container 2 */}
        <div class="container lg my-5">
        {/* row 2 */}
          <div class="row">
          {/* col 2 of 1 */}
            <div class="col-8 sm=true">
              <div className="p-5 ">
                <Link to={`/product/${randomPictures[2].id}`}>
                  <img className='random-picturesthree' src={`${REACT_APP_BACKEND_URL}${randomPictures[2].url} `} alt="product" />
                </Link>
              </div>
            </div>
            {/* col 2 of 2 */}
            <div class="col-4 sm=true">
              <div className="p-5 ">
                <Link to={`/product/${randomPictures[3].id}`}>
                  <img className='random-picturesfour' src={`${REACT_APP_BACKEND_URL}${randomPictures[0].url} `} alt="product" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="picture" src={quote_image} alt="bottom-hero-image" />
        </div>
      </div>
    // </div>
  );
};

export default Grid;
