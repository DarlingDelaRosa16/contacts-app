import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
   name: 'auth',

   initialState: {
      status: 'checking',
      user: {},
      errMs: undefined
   },

   reducers: {

      onChecking: (state, /* action */ ) => {
        state.status = 'checking'
        state.user   = {}
        state.errMs  = undefined
      },
      onLogin:(state, {payload})=>{
        state.status = 'authenticated'
        state.user   = payload
        state.errMs  = undefined
      },
      onLogOut: (state, {payload})=>{
        state.status = 'not-authenticated'
        state.user   = {}
        state.errMs  = payload
      },
      clearErrMs: (state)=>{
         state.errMs = undefined
      }

   }

});


export const { onChecking, onLogin, onLogOut, clearErrMs} = authSlice.actions;