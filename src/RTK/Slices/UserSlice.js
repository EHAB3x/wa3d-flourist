import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const  fetchUsers = createAsyncThunk("ProductSlice/fetchUsers",async()=>{
    const res = await fetch("https://api.jsonbin.io/v3/b/64d37f768e4aa6225ecd3a45");
    const data = await res.json();
    console.log(data.record.users)
    return data.record.users;
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