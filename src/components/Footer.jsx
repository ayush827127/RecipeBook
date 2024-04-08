import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h5>About Us</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ut lorem sodales, vel rhoncus turpis fermentum. Vivamus tempus efficitur turpis nec posuere.</p>
        </div>
        <div className="col-lg-3 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="col-lg-3 mb-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>Address: 123 Main Street, City, Country</li>
            <li>Phone: +1 234 567 890</li>
            <li>Email: info@example.com</li>
          </ul>
        </div>
      </div>
      <hr className="bg-light" />
      <div className="text-center">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
