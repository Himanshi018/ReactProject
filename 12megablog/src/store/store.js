import {configureStore} from 'reduxjs/toolkit';

const store = configureStore({
    reducer: {login, logout},
    auth: authSlice,
})


export default store;