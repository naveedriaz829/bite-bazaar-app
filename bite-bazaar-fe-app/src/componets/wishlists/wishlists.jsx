import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "../../axios/axios";
import NoWishList from "../../assets/images/wishlist_empty.svg";
import "./wishlists.css";

const Wishlists = () => {
  const [wishlistUser, setWishListUser] = useState([]);

  useEffect(() => {
    const token = localStorage?.getItem("token");

    async function getWishlistAPI() {
      const wishlist = await axios.get("/user/wishlist", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setWishListUser(wishlist?.data[0]?.data);
    }

    getWishlistAPI();
  }, []);

  const deleteWishlistHandler = async (id) => {
    const token = localStorage?.getItem("token");
    await axios.put(`/user/wish-list/delete/${id}`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    })
    window.location.reload(false);
  }

  return (
    <>
      <div className="bg-success d-flex justify-content-center row flex-wrap border border-rounded">
        <div className="bg-light my-5 border rounded d-flex">
          {!!!wishlistUser?.length && <div className="d-flex w-100 justify-content-center text-success">
            <img src={NoWishList} alt="no wishlist" className="mt-5 mb-5 w-25" />
          </div>}
          {!!wishlistUser?.length && wishlistUser?.map((item) => {
            return (
              <div key={item?._id} className="bg-white border my-2 mx-4 rounded ">
                <div>
                  <div className="wishList  mx-1 my-2 bg-success shadow-lg rounded d-flex justify-content-center border border-white">
                    <h4 className="my-2 mx-1 text-white">{item?.name}</h4>
                  </div>
                  <div className="d-flex justify-content-center row">
                    <img
                      className="wishlist-img rounded flex-shrink-0 mt-2 "
                      src={item?.image}
                      alt="WishList Product Image"
                    />
                    <div className="d-flex justify-content-center mb-1">
                      <Button color="success" size="small" onClick={() => deleteWishlistHandler(item?._id)}
                        variant="outlined" startIcon={<DeleteIcon />} className='fw-bold'>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </div>);
          })}
        </div>
      </div>
    </>
  );
};

export default Wishlists;
