import React from "react";
import Container from "react-bootstrap/Container";
import CategoryCard from "./CategoryCard";
import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

const Cards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState();

  const { REACT_APP_BACKEND_URL } = process.env

  const { id } = useParams()

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${REACT_APP_BACKEND_URL}/product/category-pictures`
      )
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!categories) return null;

  return (
    <div className="cards">
      {/* <div class="container lg my-5"> */}
      <div class="row pt-5">
        {categories.map((category, index) => {
          return (
            <CategoryCard
              key={index}
              thumbnail={category.thumbnail}
              name={category.name}
            />
          );
        
        })}
      
      </div>
      {/* <Button href="#" type="submit">Button</Button>{' '} */}
      <h2 className="justify-items-center">Everyday can be more magical</h2>
      <p className="cursive">Painting and tools to inspire wonder.</p>
    </div>
    // </div>
  );
};

export default Cards;
