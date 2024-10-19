import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of a menu item
interface MenuItem {
    id: string;
    name: string;
    price: number;
}

// Define the shape of the menu state
interface MenuState {
    items: MenuItem[];
}

// Define the initial state
const initialState: MenuState = {
    items: [],
};

// Create the menu slice
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenuItems(state, action: PayloadAction<MenuItem[]>) {
            state.items = action.payload; // Set the menu items
        },
        // Add other reducers here...
    },
});

// Export actions and reducer
export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
