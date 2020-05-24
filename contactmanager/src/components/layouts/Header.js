import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { text } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-text">
          {text}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home <i className="fa fa-home"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add/contact" className="nav-link">
                Add Contact <i className="fa fa-plus"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contacts" className="nav-link">
                Contacts List <i className="fa fa-list"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us <i className="fa fa-question"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  text: "My App",
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
