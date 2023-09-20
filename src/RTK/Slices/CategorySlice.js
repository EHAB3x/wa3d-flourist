import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchCategories = createAsyncThunk("ProductSlice/fetchCategories",async()=>{
    const res = await fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/db.json");
    const data = await res.json();
    return data.categories;
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