import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

export default function Modal({ open, children, onClose }) {
    if (!open) 
        return null;
    return (
        <div className="modalOverlay">
            <div className="modalStyle">
                <FontAwesomeIcon className="modalExit" icon={faTimesCircle} size="2x" onClick={onClose}/>
                {children}
                <button className="modalOkay" onClick={onClose}>Ok</button>
            </div>
        </div>
    )
}
