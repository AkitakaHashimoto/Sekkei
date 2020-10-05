import React, {  useState } from 'react';
import './App.css';
import Modal from './Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BotNav from './BotNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function BottomBar() {


    const[isOpen, setIsOpen] = useState(false);

    return (
        <Row className="bottomBar">
            <Col className="socialCol">
                <h3 className="socialText">Follow Us</h3>
                <div className="socialIcons">
                    <FontAwesomeIcon className="specificSocial" icon={faInstagram} size="2x" color="white" 
                    onClick={()=>window.open("https://www.instagram.com/egocentric_error/?hl=en", "_blank")}/>
                    <FontAwesomeIcon className="specificSocial" icon={faTwitter} size="2x" color="white"/>
                    <FontAwesomeIcon className="specificSocial" icon={faYoutube} size="2x" color="white"/>
                </div>
               
            </Col>

            <Col>
                    <input
                    className="subInput"
                    type='text'
                    placeholder='Enter Email'>
                    </input>

                    <div>
                        <button className="subButton" onClick= { () => setIsOpen(true) }>
                            Subscribe
                        </button>

                        <Modal open={isOpen} onClose={()=> setIsOpen(false)}> 
                           <h2>Thank you for subscribing to SEKKEI's newsletter!</h2>
                        </Modal>
                    </div>
            </Col>

            <Col>
                <BotNav />   
            </Col>
        </Row>
    );
}

export default BottomBar;