import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchProducts = createAsyncThunk("ProductSlice/fetchProducts",async()=>{
    const res = await fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/db.json");
    const data = await res.json();
    return data.products;
})



const ProductSlice = createSlice({
    initialState:[],
    name: "ProductSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state, action)=>{
            return action.payload
        })
    }
});



export const {} = ProductSlice.actions;
export default ProductSlice.reducer;