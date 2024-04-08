import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <header className=" border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-1 mb-lg-0 text-dark text-decoration-none"
          >
            <img
            src="data:image/jpeg;base64,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"
              alt="Logo"
              width={"70px"}
            />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-1 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 link-secondary">
                Home
              </Link>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-1 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
