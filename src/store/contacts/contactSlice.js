import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
   name: 'contact',

   initialState: {
      contacts: [],
      activeContact: null,
      filteredContacts: null
   },

   reducers: {

      onSetActiveContact: (state,{payload}) => {
         state.activeContact = payload;
      },
      onSetFavContact: (state, {payload}) => {
         state.activeContact.favorite = payload.favorite
         state.contacts = state.contacts.map(contact =>{
            if(contact._id === state.activeContact._id){
               return {...state.activeContact}
            }
            return contact
         })
      },
      onSetNewContact: (state, {payload})=>{
         state.contacts.push(payload)
      },
      onDeleteContact:(state, {payload})=>{
         state.contacts = state.contacts.filter(contact => contact._id !== payload)
      },
      onUpdateContact: (state, {payload})=>{
         state.contacts = state.contacts.map(contact=>{
            if(contact._id === payload._id){
               return payload
            }
            return contact
         })
         state.activeContact = null
      },
      onSetFilterContact: (state, {payload})=>{
         if(payload !== null){
            state.filteredContacts = state.contacts.filter(
               contact => contact.name.toLocaleLowerCase().includes(payload.toLocaleLowerCase()) 
                          || contact.phone.includes(payload) 
                          || contact.secondPhone.includes(payload)
                          || contact.lastName.toLocaleLowerCase().includes(payload))
            state.activeContact = null
         }else{
            state.filteredContacts = payload
         }
      },
      
      onSetSortFavContact: (state)=>{
         state.filteredContacts = state.contacts.filter(contact => contact.favorite === true)
      },
      onLoadContact: (state, {payload})=>{
         state.contacts = payload
         state.contacts = state.contacts.sort((x,y)=> x.name.localeCompare(y.name))
      },
      onClearContacts: (state)=>{
         state.contacts = []
         state.activeContact = null
         state.filteredContacts = null
      }
      
   }

});

export const { onSetActiveContact, onSetFavContact, onSetNewContact, onDeleteContact, onUpdateContact, onSetFilterContact, onLoadContact, onClearContacts, onSetSortFavContact } = contactSlice.actions;


