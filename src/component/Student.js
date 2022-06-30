import React from 'react';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import { CardGroup } from 'react-bootstrap';


function Student () {
    return <div>
        <h1>Students list</h1>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>


    </div>
}
export default Student;