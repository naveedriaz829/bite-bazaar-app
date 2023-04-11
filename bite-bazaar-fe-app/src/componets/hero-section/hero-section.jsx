import React, { useState } from "react";
import carouselimg1 from "../../assets/images/carousel-1.jpg";
import carouselimg2 from "../../assets/images/carousel-2.jpg";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';
import axios from "axios";
import AllProducts from "../our-products/all-products";
import OurFeatures from "../our-features/our-features";
import { Link } from "react-router-dom";
import "./hero-section.css";

axios.defaults.withCredentials = true;
let firstRender = true;
const HeroSection = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <div
        className="container-fluid p-0 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carouselimg1} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 text-black fw-bold animated slideInDown">
                        Organic Food Is Good For Health
                      </h1>
                      <Link to="products" className="btn btn-success rounded-pill py-sm-3 px-sm-5" >
                        Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carouselimg2} alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-7">
                      <h1 className="display-2 mb-5 text-black fw-bold animated slideInDown">
                        Natural Food Is Always Healthy
                      </h1>
                      <Link to="products" className="btn btn-success rounded-pill py-sm-3 px-sm-5" >
                        Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>


      <div className="container px-4 border shadow py-1" id="featured-3">
        <div className="row g-4 py-2 row-cols-1 row-cols-lg-3">
          <div className="feature col border-end p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2">
              <LocalShippingIcon className="text-success" fontSize="large" />
            </div>
            <h3 className="fs-2">Free Shipping</h3>
            <p className="fw-bold">From $30.00</p>
          </div>
          <div className="feature col border-end p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2">
              <SupportAgentIcon className="text-success" fontSize="large" />
            </div>
            <h3 className="fs-2">Support 24/7</h3>
            <p className="fw-bold">At Anytime</p>
          </div>
          <div className="feature col p-3">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2">
              <PaymentIcon className="text-success" fontSize="large" />
            </div>
            <h3 className="fs-2">Secure Payments</h3>
            <p className="fw-bold">Totally Safe</p>
          </div>
        </div>
      </div>
      <AllProducts />
      <OurFeatures />
    </div>
  );
};

export default HeroSection;
