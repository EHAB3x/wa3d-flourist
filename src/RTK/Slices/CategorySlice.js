import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchCategories = createAsyncThunk("ProductSlice/fetchCategories",async()=>{
    const res = await fetch("https://api.jsonbin.io/v3/b/64d37f768e4aa6225ecd3a45");
    const data = await res.json();
    return data.record.categories;
})

const CategorySlice = createSlice({
    initialState:[],
    name: "CategorySlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled,(state, action)=>{
            return action.payload
        })
    }
})

export const {} = CategorySlice.actions;
export default CategorySlice.reducer;