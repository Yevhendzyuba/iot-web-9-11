import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slice/CosmetologySlice";

export default configureStore({
    reducer:{
        cart: cartReducer,
    },
});
