import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    openAlert: false,
    message: ''
}
const appAlertSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers:{
        showAppAlert: (state,action)=>{
            state.openAlert = true;
            state.message = action.payload;
            console.log(state.message, state.openAlert);
        },
        closeAppAlert: (state, action)=>{
            state.openAlert = false;
            state.message = '';
        }
    }
});

export const {showAppAlert, closeAppAlert} = appAlertSlice.actions;
export default appAlertSlice.reducer;