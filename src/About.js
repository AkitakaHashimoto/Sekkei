import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Row className="aboutRow">
      <Col className="aboutImageCol">
        <img className="aboutImage"></img>
      </Col>
      <Col className="aboutText">
        <h1>Brand Profile</h1>
        <h2>
          Sekkei is a brand that emphasizes experimentation through the combination
          of materials, fabrics, colors, and silhouettes. Founded in 2020, the brand's focal point is to...
        </h2>
      </Col>
    </Row>
  );
}

export default About;
