import React from 'react';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

function TopBar() {


    return (
        <Row className="topBarRow">
            <Col  md={{span: 1, offset: 10 }} className="topBarCol">
                <FontAwesomeIcon  className="topIcon" icon={faSearch} size="2x" />
                <FontAwesomeIcon  className="topIcon" icon={faShoppingBasket} size="2x" />
                <a href="/login">
                    <FontAwesomeIcon  className="topIcon" href="/login" icon={faUserCircle} size="2x" />
                </a>
            </Col>
        </Row>
    );
}

export default TopBar;