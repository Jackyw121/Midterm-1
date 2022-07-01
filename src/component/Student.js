import React from 'react';
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';


function Student ({students}) {



    return <div>
        <h1>Students list</h1>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={students.image} />
        <Card.Body>
          <Card.Title>{students.name}</Card.Title>
          <Card.Text>{students.gpa}</Card.Text>
          <Button variant="primary">Grade</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
  
</Row>


    </div>
}
export default Student;