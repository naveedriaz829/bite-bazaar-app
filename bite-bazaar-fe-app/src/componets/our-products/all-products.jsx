import React, { useEffect, useState } from "react";
import { TabContext, TabList } from "@mui/lab";
import { Link } from "react-router-dom";
import { Alert, Box, Button, Tab } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { singleProductItemHandler } from "../../store/singleProduct/singleProductSlice";
import { getAllProductsThunk } from "../../store/all-products-slice/all-products-slice";
import { addToCartItem } from "../../store/addCartSlice/addCartSlice";
import { showAppAlert } from "../../store/app-alert/app-alert-slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios/axios";
import "./all-products.css";

const AllProducts = (data) => {
  const [tabValue, setTabValue] = useState("1");
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { productsArr } = useSelector((state) => state.allproducts);
  const dispatch = useDispatch();

  const alertHandler = (message) => {
    dispatch(showAppAlert(message));
  }

  console.log(products);
  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const token = localStorage?.getItem("token");
  const addWishListHandler = async (item) => {

    const token = localStorage?.getItem("token");
    const response = await axios.put(
      `/user/wish-list/${item?._id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    ).then(alertHandler('Added to Wishlist Successfully'));
  };

  useEffect(() => {
    dispatch(getAllProductsThunk(selectedCategory));
  }, [dispatch, selectedCategory]);

  useEffect(() => {
    setProducts(productsArr);
  }, [productsArr]);

  const signleProductHandler = (item) => {
    dispatch(singleProductItemHandler(item));
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const addtocarthandler = (item) => {
    let cartObj = {
      id: item?._id,
      name: item?.name,
      quantity: 1,
      price: item?.newPrice
    }
    dispatch(addToCartItem(cartObj))
  }

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
              <div
                className="section-header text-start mb-5  fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: "500px" }}
              >
                <h1 className="display-5 mb-3">Popular Food Items</h1>
                <p className="fs-5">
                  See all our popular Food Items in this week. Get some special
                  offer with free shipping.
                </p>
              </div>
            </div>

            <div
              className="d-flex bg-success  rounded-2 flex-wrap py-3 justify-content-between text-start  slideInRight">
              <div className="filter-items">
                <h5 className="text-white ">Store Products</h5>
              </div>
            </div>
          </div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={tabValue}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" >
                  <Tab label="All Products" onClick={() => handleCategorySelection("")} value="1" />
                  <Tab label="Baked Goods" onClick={() => handleCategorySelection("Baked")} value="2" />
                  <Tab label="Pantry Staples" onClick={() => handleCategorySelection("Pantry")} value="3" />
                  <Tab label="Fresh Products" onClick={() => handleCategorySelection("Fresh")} value="4" />
                </TabList>
              </Box>
            </TabContext>
          </Box>
          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="  d-flex flex-wrap fadeInUp" data-wow-delay="0.1s" >
                  {productsArr?.map((item) => {
                    return (
                      <div
                        key={item?._id}
                        className="product-item  shadow col-xl-3 col-lg-3 col-md-3 mt-3 justify-content-between"
                      >
                        <div className="position-relative bg-light overflow-hidden">
                          <img className="img-fluid w-100" src={item?.image} alt="image" />
                          
                        </div>
                        <div className="text-center p-4">
                          <a className="d-block h5 mb-2 text-decoration-none text-secondary">
                            {item?.name}
                          </a>
                          <span className="text-secondary me-1">
                            ${item?.newPrice}
                          </span>
                          <span className="text-secondary text-decoration-line-through">
                            ${item?.oldPrice}
                          </span>
                        </div>
                        <div className="d-flex border-top">
                          <small className="w-50 text-center border-end py-2">
                            <Link to={`/${item?._id}`}>
                              <Button variant="outlined" color="success">
                                <VisibilityIcon className="text-success"
                                  onClick={() => signleProductHandler(item)}
                                />
                              </Button>
                            </Link>
                          </small>
                          <small className="w-50 text-center border-end py-2">
                            <Button variant="outlined" color="success">
                              <AddShoppingCartIcon className=" text-success"
                                onClick={() => { addtocarthandler(item) }}
                              />
                            </Button>
                          </small>
                          <small className="w-50 text-center py-2">
                            <Button variant="outlined" color="success">
                              <FavoriteIcon className=" text-success" onClick={() => { addWishListHandler(item) }} />
                            </Button>
                          </small>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
