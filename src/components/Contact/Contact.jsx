import { useState } from 'react'
import PropTypes from "prop-types";
import './Contact.css';
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";

const Contact = ({ name, number, onDelete }) => {
  return (
        <li className="contact-item">
            <div className="contact-text">
                <BsFillPersonFill className="contact-icon"/>
                <p className="contact-name">{name}</p>
                <FaPhoneAlt className="contact-icon"/>
                <p className="contact-name">{number}</p>
            </div>
          <button className="contact-delete-btn" onClick={onDelete}>Delete</button>
        </li>
  );
};

export default Contact;