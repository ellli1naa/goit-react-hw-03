import { useState } from 'react'
import PropTypes from "prop-types";
import './SearchBox.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
     <div className="search-box">
      <label htmlFor="search" className="search-label">
        Find contacts by name
      </label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={onFilterChange} 
        className="search-input"
        placeholder="Search by name..."
      />
    </div>
  );
};

export default SearchBox;