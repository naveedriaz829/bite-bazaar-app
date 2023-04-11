import axios from '../../axios/axios';

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// thunk

export const singinUserThunk = createAsyncThunk('auth/signin',
    async ({ values, navigate }) => {
        try {
            const response = await axios.put('authentication/log-in', values)
            // console.log(response.data.token);
            localStorage.setItem('token', response.data.token)
            navigate('/home')
            return response.data
        } catch (error) {
            console.log(error.response.data.message);
            // alert(error.response.data.message)
            return error.response.data.message
        }

    }
)

export const signupUserThunk = createAsyncThunk('auth/siginup',
    async ({ values, navigate,showAppAlert }) => {

        try {
            const response = await axios.post('authentication/sign-up', values).then(() => navigate('/log-in'))
            // navigate('/log-in')
            return response.data

            
        } catch (error) {
            showAppAlert(error.response.data.message)
            return error.response.data.message
        }
    })

const initialState = {
    message: '',
    error: '',
}

const siginSlice = createSlice({
    name: 'sigin',
    initialState,
    reducers: {
       
    },

    extraReducers(builder) {
        // siginFullfilledReducer(builder, signInThunk)

        builder.addCase(singinUserThunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.error = action.payload;
           
        })

        builder.addCase(signupUserThunk.fulfilled, (state, action) => {
            state.error = action.payload
        })
    }
})

export default siginSlice.reducer