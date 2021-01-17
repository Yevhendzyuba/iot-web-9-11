import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cosmetologyBuild",
    initialState: {
        cart: [],
    },
    reducers: {
        addCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                foundItem.price_in_uah += action.payload.price_in_uah;
            } else {
                state.cart = [...state.cart, action.payload];
            }
        },
        incrementCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                foundItem.price_in_uah += 500;
            }
        },
        decrementCart: (state, action) => {
            let foundItem = state.cart.find((item) => item.id === action.payload.id);
            if (foundItem) {
                if (foundItem.price_in_uah > 1) {
                    foundItem.price_in_uah -= 500;
                } else {
                    let index = state.cart.indexOf(foundItem);
                    state.cart.splice(index, 1)
                }
            }
        },
    },
});

export const {incrementCart, decrementCart, addCart} = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;