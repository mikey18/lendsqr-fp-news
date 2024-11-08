import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import dataReducer from './newsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        news: dataReducer,
    },
});
