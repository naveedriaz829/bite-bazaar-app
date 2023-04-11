import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCartItem } from "../../store/addCartSlice/addCartSlice";

const SingleProducts = () => {
  const { singleProductItem } = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  console.log(singleProductItem);
  const [value, setValue] = useState(2);
  const param = useParams();

  const addCartHandler = (item) =>{
    let cartObj = {
      id: item?._id,
      name: item?.name,
      quantity: 1,
      price: item?.newPrice
    }
    dispatch(addToCartItem(cartObj))
  }

  return (
    <>
      {/* Main Container for Product Short details  */}
      <div className="container1 bg-light justify-content-center my-3 mx-3 rounded text-center">
        <div className="headingContainer">
          <h3>{singleProductItem?.name}</h3>
        </div>
        <div className="containerForProductShortDetails my-2 d-flex flex-wrap justify-content-center">
          <div className="productImageContainer d-flex ">
            <img
              className="rounded img-fluid flex-start me-2 "
              src={singleProductItem?.image}
              alt="Product Image"
            />
          </div>

          {/* Code below for stars Rating:  */}

          <div className="rating float-end w-80 ms-2 rounded my-4 me-3">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <p>200 Ratings | 22 Answered Questions</p>
            <h6>
              Brand: <small>By Ideas Pakistan</small>
            </h6>
            <h4>$ {singleProductItem?.newPrice}</h4>
            
            <button onClick={()=>addCartHandler(singleProductItem)} type="button" className="btn mt-5 w-50 btn-success mx-2">
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      {/* Detail Discription of the Product  */}
      <div className="container2   text-center bg-light d-flex flex-wrap ">
        <div className="heading">
          <h2>Detail Discription</h2>
          <p className="mx-5 my-3 text-wrap">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            vel sapiente hic, molestias odit soluta reiciendis est in nihil
            numquam voluptatibus debitis saepe facilis maxime eum deleniti optio
            consequatur! Veniam impedit, accusantium ex ad tenetur harum sequi
          </p>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
