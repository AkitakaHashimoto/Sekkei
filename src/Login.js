import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Formik, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <Row className="loginRow">
      <Col md={4} className="loginSideCol">
        <nav className="loginNav">
          <ul className="loginNavList">
              <li className="loginNavItem">
                  <NavLink to='/customercare' className="loginNavLink" activeClassName="botSelected" >
                  My Account
                  </NavLink>
              </li>
              <li className="botNavItem">
                  <NavLink to='/information' className="loginNavLink" activeClassName="botSelected">
                  Payments
                  </NavLink>
              </li>
              <li className="botNavItem">
                  <NavLink to='/payment' className="loginNavLink" activeClassName="botSelected">
                  Shipping
                  </NavLink>
              </li>
              <li className="botNavItem">
                  <NavLink to='/shipping' className="loginNavLink" activeClassName="botSelected">
                  Returns and Refunds
                  </NavLink>
              </li>
              <li className="botNavItem">
                  <NavLink to='/returnsandexchanges' className="loginNavLink" activeClassName="botSelected">
                  Size Guide
                  </NavLink>
              </li>
              
          </ul>
        </nav>
      </Col>
      <Col md={4} className="loginCol">
        <Formik
          initialValues={{
            userName: '',
            password: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="loginForm">
            <label className="loginLabel" htmlFor="userName">Username:</label>
            <Field className="loginField" id="userName" name="userName" />

            <label className="loginLabel" htmlFor="password">Password:</label>
            <Field className="loginField" id="password" name="password" />

            <button className="loginButton" type="submit">Login</button>

            <button className="pwButton" type="submit">Forgot Password?</button>
          </Form>
        </Formik>

    </Col>
  </Row>
    
    
  );
}

export default Login;