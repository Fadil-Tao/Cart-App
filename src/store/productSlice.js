import { createSlice } from "@reduxjs/toolkit";
import products from "../Data/data";
const productSlice = createSlice({
    name:'products',
    initialState : products,
    reducers:{
        search(state,action){
            return state.filter((state,name) => name === action.payload )
        }

    }
})

export const {search} = productSlice.actions
export default productSlice.reducer

