import React from 'react';
// import { Link } from 'react-router-dom';
function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode}`}
        data-bs-theme={props.mode}
      >
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">
            TextUtils
          </Link> */}
          <a className="navbar-brand" href="#">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label ${
                    props.mode === 'dark' ? 'text-light' : 'text-dark'
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
