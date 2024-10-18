import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReducer from './slices/authSlice';  // Import the authentication slice

// Configure the Redux store
const store = configureStore({
  reducer: {
    auth: authReducer,  // Add the authentication slice to the store
    // Add other reducers here as your app grows
  },
  devTools: process.env.NODE_ENV !== 'production',  // Enable Redux DevTools in non-production environments
});

// Define the root state type for TypeScript
export type RootState = ReturnType<typeof store.getState>;

// Define the dispatch type for TypeScript
export type AppDispatch = typeof store.dispatch;

// Create a custom hook to use the dispatch in components
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
