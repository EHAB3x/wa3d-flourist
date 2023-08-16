import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    initialState:[],
    name :"CartSlice",
    reducers:{
        addToCart:(state,action)=>{
            const findProduct = state.find((product)=> product.id === action.payload.id)
            if(findProduct){
                findProduct.quantity += 1;
            }else{
                const productClone = {...action.payload, quantity:1}
                state.push(productClone)
            }
        },
        deleteFromCart:(state, action)=>{
            return state.filter((product) => product.id !== action.payload.id)
        },
        clear:(state,action)=>{
            return[]
        },
        addQuant:(state, action)=>{
           const findProduct = state.find((product)=> product.id === action.payload.id);
           if(findProduct){
            findProduct.quantity += 1;
            }
        },
        minusQuant:(state,action)=>{
            const findProduct = state.find((product)=> product.id === action.payload.id);
           if(findProduct){
            findProduct.quantity -= 1;
            }
        }    
    }
});

export const {addToCart, deleteFromCart, clear, addQuant, minusQuant} = CartSlice.actions
export default CartSlice.reducer;