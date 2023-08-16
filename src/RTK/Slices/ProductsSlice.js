import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchProducts = createAsyncThunk("ProductSlice/fetchProducts",async()=>{
    const res = await fetch("https://api.jsonbin.io/v3/b/64d37f768e4aa6225ecd3a45");
    const data = await res.json();
    return data.record.products;
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