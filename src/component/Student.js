import React from 'react';
import Card from "react-bootstrap/Card"
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import s1 from './img/s1.png'

function Student ({student}) {



    return <div>
        <h1>Students list</h1>
        <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src={s1} />
        <Card.Body>
          <Card.Title>{student.name}</Card.Title>
          <Card.Text>Grade
          </Card.Text>
          <Button variant="primary">Grade</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
  
</Row>


    </div>
}
export default Student;