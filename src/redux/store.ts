import {configureStore} from '@reduxjs/toolkit';
import gendersReducer from './reducers/gendersReducer';

const store = configureStore({
    reducer: {
        genders: gendersReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
