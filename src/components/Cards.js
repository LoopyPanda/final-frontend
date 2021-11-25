import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./cards.css";

const Cards = () => {

  return (
    <div className="Cards justify-content-center">
      <CardGroup className='cardsgroup '>
        <Card className='cards'>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Calender 2022</Card.Title>
            <Card.Text>
              PAINTING
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Start Shopping</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Posts Cards</Card.Title>
            <Card.Text>
            PAINTING
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Start Shopping</Button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Artprints</Card.Title>
            <Card.Text>
              PAINTING
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Start Shopping</Button>
          </Card.Footer>
        </Card>
      </CardGroup>
      {/* <Container className='container'>
<Card style={{ width: '16rem', height: '20rem'}} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Calender 2022</Card.Title>
    
    <Button variant="primary">Start Shopping</Button>
  </Card.Body>
</Card>
<Card  style={{ width: '16rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Posts Cards</Card.Title>
    
    <Button variant="primary">Start shopping</Button>
  </Card.Body>
</Card>
<Card  style={{ width: '16rem', height: '20rem'}}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Artprints</Card.Title>
    
    <Button variant="primary">Start shopping</Button>
  </Card.Body>
</Card>
</Container>      */}
    </div>
  );
};

export default Cards;
