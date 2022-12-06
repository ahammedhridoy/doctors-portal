import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../../assets/images/facebook.png";
import twitter from "../../../assets/images/twitter.png";
import youtube from "../../../assets/images/youtube.png";


const Footer = () => {
  return (
    <section>
      <footer className="footer p-10 grid grid-cols-2 lg:grid-cols-none lg:place-items-center mx-auto ">
        <div>
          <span className="footer-title">Services</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dental-services">Dental Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div>
          <span className="footer-title">Oral Health</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dental-services">Dental Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div>
          <span className="footer-title">Our Address</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dental-services">Dental Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </footer>
      <footer className="">
        <div className="justify-between lg:flex lg:mx-20">
            <div className="text-center lg:my-auto font-bold text-primary">
                <p>Copyright 2020 All Rights Reserved</p>
            </div>
            <div className="flex justify-center my-5">
                
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={youtube} alt="" /></a>
            </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
