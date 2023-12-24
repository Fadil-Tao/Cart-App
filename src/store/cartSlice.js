import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const exist = state.find((item) => item.name === action.payload.name);
            if (exist) {
                exist.qty += 1;
            } else {
                const newItem = {
                    ...action.payload,
                    qty: 1,
                };
                state.push(newItem);
            }
        },
        remove(state, action) {
            return state.filter((state, index) => index !== action.payload);
        },
        increase(state, action) {
            state[action.payload].qty += 1;
        },
        decrease(state, action) {
            if (state[action.payload].qty === 1) {
                
                return state.filter((item, index) => index !== action.payload);
            } else {
                state[action.payload].qty -= 1;
            }
        },
    },
});
export const { add, remove, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
