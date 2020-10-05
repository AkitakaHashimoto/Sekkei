import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Formik, Field, Form } from 'formik';

function Contact() {
  return (
      <Row className="contactRow">
        <Col md={3} className="contactCol">
          <h4 className="contactHeader">Items with * are required.</h4>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              orderNumber: '',
              topic: '',
              message: '',
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form className="contactForm">
              <label htmlFor="firstName">First Name: *</label>
              <Field className="formField" id="firstName" name="firstName" />

              <label htmlFor="lastName">Last Name *</label>
              <Field className="formField" id="lastName" name="lastName" />

              <label htmlFor="email">Email *</label>
              <Field
                className="formField"
                id="email"
                name="email"
                type="email"
              />

              <label htmlFor="phoneNumber">Phone Number: *</label>
              <Field className="formField" id="phoneNumber" name="phoneNumber"/>

              <label htmlFor="orderNumber">Order Number: </label>
              <Field className="formField" id="orderNumber" name="orderNumber"/>

              <label htmlFor="topic">Topic: </label>
              <Field className="formField" id="topic" name="topic" />

              <label htmlFor="message">Message: *</label>
              <Field className="formMessage" as="textarea" id="message" name="message"/>

              <button className="formSubmit" type="submit">Submit</button>
            </Form>
          </Formik>

        </Col>
      </Row>
  );
}

export default Contact;