import { useState } from 'react'
import PropTypes from "prop-types";
import './ContactList.css';
import Contact from '../Contact/Contact.jsx'

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
        <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;