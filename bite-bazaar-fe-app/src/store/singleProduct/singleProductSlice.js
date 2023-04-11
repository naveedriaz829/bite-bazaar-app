import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    singleProductItem:{}
}

export const singleProuctSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    singleProductItemHandler: (state,action)=>{
        console.log(action.payload);
        state.singleProductItem = action.payload;
    }
  },
});

export const {singleProductItemHandler} = singleProuctSlice.actions;
export default singleProuctSlice.reducer;