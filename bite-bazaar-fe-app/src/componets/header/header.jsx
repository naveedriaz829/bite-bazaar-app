import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, Outlet } from "react-router-dom";
import { Button, Grid } from "@mui/material";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch()
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid sx={{ marginTop: "80px" }}>
      <div
        className={`container-fluid fixed-top ${
          scrolled ? "scrolled" : ""
        } px-0 wow fadeIn`}
        data-wow-delay="0.1s"
      >
        <nav
          className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <Link to="/home" className="navbar-brand ms-4 ms-lg-0">
            <h1 className="fw-bold text-success m-0">
              Bite <span className="text-secondary">Bazaar</span>
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/home" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="history" className="nav-item nav-link">
                History
              </Link>
              <Link className="nav-item nav-link" to="home/products">
                Products
              </Link>
              <Link to="wishlists" className="nav-item nav-link">
                Wish List
              </Link>
              <Link className="d-flex align-items-center" to="/log-in">
                <Button className="text-dark text-decoration-none" >Log Out</Button>
              </Link>
              {/* <Link to='log-in'><Button> {user && <h1>{user?.name}</h1>}</Button></Link> */}
            </div>
            <div className="d-none d-lg-flex ms-2">
              <a className="btn-sm-square bg-white rounded-circle ms-3" >
                <small className="fa fa-search text-body"></small>
              </a>
              <a className="btn-sm-square bg-white rounded-circle ms-3" >
                <small className="fa fa-user text-body"></small>
              </a>
              <a className="btn-sm-square bg-white rounded-circle ms-3">
                <small className="fa fa-shopping-bag text-body"></small>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Grid>
  );
};

export default Header;
