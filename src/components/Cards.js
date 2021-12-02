import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./cards.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  // const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://fathomless-depths-64916.herokuapp.com/product/category-pictures`
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, );
  data && 
  console.log(data[0]);
  return (
    <div className="cards">
      <div class="container lg my-5">
        <div class="row">
          <div class="col">
            <div className="p-5 border border-secondary">
              {data && (
                <img
                  className="pictures"
                  src={`https://fathomless-depths-64916.herokuapp.com/product/category-pictures${data[0].thumbnail}`}
                />
              )}{" "}
            </div>
            {data && <h5> {data.name}</h5>}

            <button type="button">Start Shopping</button>
          </div>
          <div class="col">
            <div className="p-5 border border-secondary">
            {data && (
                <img
                  className="pictures"
                  src={`https://fathomless-depths-64916.herokuapp.com/product/category-pictures/${data[1].thumbnail}`}
                />
              )}
            </div>
            {data && <h5> {data.name}</h5>}
            <button type="button">Start Shopping</button>
          </div>
          <div class="col">
            <div className="p-5 border border-secondary">
            {data && (
                <img
                  className="pictures"
                  src={`https://fathomless-depths-64916.herokuapp.com/product/category-pictures/${data[2].thumbnail}`}
                />
              )}
            </div>
            {data && <h5> {data.name}</h5>}
            <button type="button">Start Shopping</button>
          </div>
        </div>
        <h2 className="justify-items-center">
        Everyday can be more magical
      </h2>
      <p className="cursive">
                Painting and tools to inspire wonder.
              </p>
      </div>
    </div>
  );
};

export default Cards;
