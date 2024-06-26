import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsDetails: []
}

export const cartSlice = createSlice({
    name:'cartName',
    initialState,
    reducers:{
        // setCartDetails:(action,payload) => {
        setCartDetails:(state,action) => {
          state.cartsDetails = [...state.cartsDetails, action.payload]
        }
    }
})

export const {setCartDetails} = cartSlice.actions;

export default cartSlice.reducer