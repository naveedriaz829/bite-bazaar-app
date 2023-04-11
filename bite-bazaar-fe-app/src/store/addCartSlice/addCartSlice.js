import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
    cartItems: []
}
export const addCartSlice = createSlice({
    name: 'addproduct',
    initialState,
    reducers: {
        increment: (state, action) => {
            const index = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.cartItems[index].quantity += 1;
                state.cartItems[index].totalPrice += state.cartItems[index].itemPrice;
            }
        },
        decrement: (state,action) => {
            const index = state?.cartItems.findIndex(item => item?.id === action.payload.id);
            if (index !== -1) {
                if (state.cartItems[index].quantity === 1) {
                    state.splice(index, 1);
                } else {
                    state.cartItems[index].quantity -= 1;
                    state.cartItems[index].totalPrice -= state.cartItems[index].itemPrice;
                }
            }
        },
        addToCartItem: (state, action) => {
            console.log(action.payload);
            const { id , name,price ,quantity } = action.payload;
            const itemPrice = Number(price)
            const index = state.cartItems.findIndex(item => item.id === id);

            if (index !== -1) {
                state.cartItems[index].quantity += quantity;
                state.cartItems[index].totalPrice += quantity * itemPrice;
            } else {
                state.cartItems.push({id, name, itemPrice, quantity, totalPrice: quantity * itemPrice})
            }
        },
        removeItem: (state, action) => {
          const index = state.cartItems.findIndex(item => item.id === action.payload.id);
          if (index !== -1) {
            state.cartItems.splice(index, 1);
          }
        },
        clearCart: state => {
          return state.cartItems=[];
        },
    }
})

export const { increment, decrement, addToCartItem,removeItem,clearCart } = addCartSlice.actions;

export default addCartSlice.reducer