import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a single cart item
interface CartItem {
    productId: string; // Assuming productId is a string; adjust as necessary
    quantity: number;
}

// Define the shape of the cart state
interface CartState {
    items: CartItem[];
}

// Define the initial state
const initialState: CartState = {
    items: [],
};

// Create the cart slice
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const { productId, quantity } = action.payload;
            const existingItem = state.items.find(item => item.productId === productId);
            if (existingItem) {
                existingItem.quantity += quantity; // Update quantity if the item already exists
            } else {
                state.items.push({ productId, quantity }); // Add new item
            }
        },
        // Add other reducers here...
    },
});

// Export actions and reducer
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
