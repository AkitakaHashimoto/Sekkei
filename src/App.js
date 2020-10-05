import React, { useState } from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import LookBook from './LookBook';
import BottomBar from './BottomBar';
import TopBar from './TopBar';
import CustomerCare from './BottomNavPages/CustomerCare';
import Information from './BottomNavPages/Information';
import Payment from './BottomNavPages/Payment';
import Shipping from './BottomNavPages/Shipping';
import ReturnsAndExchanges from './BottomNavPages/Returns';
import Login from './Login';
import BotNav from './BotNav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App() {

  const[isOpen, setIsOpen] = useState(false);

  return (
      <div className="App">
        <Router>
        <Container className="container">
          <TopBar />
          <Row>
            <Col>
              <h1 className='title'>Sekkei</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
                <Nav />
                  <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/shop" component={Shop}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/lookbook" component={LookBook}/>
                    <Route path="/customercare" component={CustomerCare}/>
                    <Route path="/information" component={Information}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/shipping" component={Shipping}/>
                    <Route path="/returnsandexchanges" component={ReturnsAndExchanges}/>
                    <Route path="/login" component={Login}/>
                  </Switch>
            </Col>
          </Row>

          <BottomBar />
        </Container>
        </Router>
      </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
