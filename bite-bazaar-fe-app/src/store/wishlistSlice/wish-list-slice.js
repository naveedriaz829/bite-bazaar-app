import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const getWishListThunk = createAsyncThunk("wishlist", async ({token}) => {
  try {
    const wishlist = await axios.get("/user/wishlist", {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(wishlist);
    return wishlist;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  userWishList: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWishListThunk.fulfilled, (state, action) => {});
  },
});
