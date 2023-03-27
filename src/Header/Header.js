import React, { useState } from "react";
import { Search, Globe } from "react-bootstrap-icons";

const Header = (props) => {
  const [city, setCity] = useState("");
  const handleOnChange = (event) => {
    setCity(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.setCity(city);
  };
  return (
    <div className="d-flex align-items-center gap-3 mb-3 border-bottom border-success py-3">
      <h2 className="d-flex align-items-center text-success gap-1">
        <Globe/>
        Weather
      </h2>
      <form className="input-group" onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={city}
          placeholder="Enter City"
          onChange={handleOnChange}
          className="form-control border border-success"
        />
        <button type="submit" className="btn btn-success">
          <Search size={20} title="Click Search" />
        </button>
      </form>
    </div>
  );
};

export default Header;