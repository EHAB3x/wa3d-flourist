import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchUsers = createAsyncThunk("ProductSlice/fetchUsers",async()=>{
    const res = await fetch("https://raw.githubusercontent.com/EHAB3x/DB/main/db.json");
    const data = await res.json();
    return data.users;
})

const UserSlice = createSlice({
    initialState:[],
    name: "UserSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state, action)=>{
            return action.payload
        })
    }
})

export const {} = UserSlice.actions;
export default UserSlice.reducer;