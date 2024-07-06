import React from 'react'
import { useState} from "react";
const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form data submitted:', formData);
  };
  return (
    <>
    <div className="container mt-5">
      <div className="jumbotron text-center bg-primary text-white">
        <h1 className="display-4">Welcome to PhoneShop</h1>
        <p className="lead">Your one-stop shop for the latest and greatest in mobile technology.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Latest Models</h2>
          <p>Discover the newest releases and top-selling smartphones available in our store. We have a wide variety of phones to suit all your needs.</p>
          <a href="/store" className="btn btn-primary">Shop Now</a>
        </div>
        <div className="col-md-6">
          <img src="../imgs/1-iPhone_12_Hero_2-up_Cropped_Screen__USEN 11.jpg" alt="Phones" className="img-fluid rounded" />
        </div>
      </div>
    </div>
    <div  className="container mt-5">
    <img src='../imgs/iPhone-15-Pro-Lineup-Feature.jpg' 
    style={{ width: "1050px", height: "500px", objectFit: "cover" }}
    />
    </div>
    <div className="container mt-5">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Home