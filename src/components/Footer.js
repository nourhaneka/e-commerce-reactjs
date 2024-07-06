import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-5 p-4 text-center">
      <div className="container">
        <div className="row">
        <div className="col-md-4">
            <h5>Our Services</h5>
            <p><a href="/" className="text-white">Warranty Policy</a></p>
            <p><a href="/" className="text-white">Repair Services</a></p>
            <p><a href="/" className="text-white">Customer Support</a></p>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: support@phoneshop.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 1234 Phone St, Tech City, TX 75001</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p className="mb-2">
              <a href="#" className="text-white"> <i className="fab fa-facebook-f mr-3"></i> Facebook</a>
            </p>
            <p className="mb-2">
              <a href="#" className="text-white"><i className="fab fa-twitter mr-3"></i> Twitter</a>
            </p>
            <p className="mb-2">
              <a href="#" className="text-white"><i className="fab fa-instagram mr-3"></i> Instagram</a>
            </p>
            <p className="mb-2">
              <a href="#" className="text-white"><i className="fab fa-linkedin-in mr-3"></i> LinkedIn</a>
            </p>
          </div>
        </div>
        <hr className="bg-white"/>
        <p className="mb-0">&copy; 2024 PhoneShop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer