import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from './addCartSlice/addCartSlice';
import signinReducer from './auth/signinSlice';
import singleProductReducer from './singleProduct/singleProductSlice';
import allproductsReducer from './all-products-slice/all-products-slice';
import snackbarReducer from './app-alert/app-alert-slice';

export const store = configureStore({
    reducer: {
        addproduct: addproductReducer,
        sigin: signinReducer,
        singleProduct: singleProductReducer,
        allproducts: allproductsReducer,
        snackbar: snackbarReducer
    }
})