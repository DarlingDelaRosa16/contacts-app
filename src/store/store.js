import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { contactSlice } from "./contacts/contactSlice";
import { modalSlice } from "./modal/modalSlice";

export const store = configureStore({
    reducer:{
        contact: contactSlice.reducer,
        modal: modalSlice.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})