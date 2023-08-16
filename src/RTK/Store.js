import {configureStore} from'@reduxjs/toolkit';
import ProductsSlice from './Slices/ProductsSlice';
import  CartSlice  from './Slices/CartSlice';
import CategorySlice from './Slices/CategorySlice';
import UserSlice from './Slices/UserSlice';

export const store = configureStore({
    reducer:{
        product : ProductsSlice,
        cart : CartSlice,
        categories: CategorySlice,
        users:UserSlice
    }
})
