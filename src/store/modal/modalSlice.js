import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
   name: 'modal',

   initialState: {
      isOpen: false,
      isSmOpen: false,
      modalData:{
         title: '',
         type: ''
      },
      alertModal: {
         state:false,
         alertMs: ''
      }
   },

   reducers: {

      onOpenModal: (state) => {
         state.isOpen = true;
      },
      onCloseModal: (state) => {
         state.isOpen = false;
      },
      onOpenSmModal: (state) => {
         state.isSmOpen = true;
      },
      onCloseSmModal: (state) => {
         state.isSmOpen = false;
      },
      onSetTitle:(state, {payload})=>{
         state.modalData.title = payload
      },
      onSetType:(state, {payload})=>{
         state.modalData.type = payload
      },
      onAlertOpenModal: (state, {payload}) => {
         state.alertModal.state   = true;
         state.alertModal.alertMs = payload
      },
      onAlertCloseModal: (state) => {
         state.alertModal.state = false;
         state.alertModal.alertMs = ''
      }

   }

});


export const { onOpenModal, onCloseModal, onOpenSmModal, onCloseSmModal, onSetTitle, onSetType, onAlertCloseModal, onAlertOpenModal } = modalSlice.actions;