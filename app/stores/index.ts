import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartReducer from './cart'; // Adjust this path as needed
import menuReducer from './menu'; // Import your menu reducer

// Combine the reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    menu: menuReducer,
});

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

// Export the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
