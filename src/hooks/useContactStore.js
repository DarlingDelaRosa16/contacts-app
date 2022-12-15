import { useDispatch, useSelector } from "react-redux"
import { contactApi } from "../api/contactApi"
import { onClearContacts, onDeleteContact, onLoadContact, onSetActiveContact, onSetFavContact, onSetFilterContact, onSetNewContact, onSetSortFavContact, onUpdateContact } from '../store/contacts/contactSlice'
import { useModalStore } from "./useModalStore"

export const useContactStore = () => {

    const dispatch = useDispatch()
    const {openAlertModal} = useModalStore()
    const { activeContact, contacts, filteredContacts } = useSelector(state => state.contact)

    const setActiveContact = (contact) => {
        dispatch(onSetActiveContact(contact))
    }

    const setFavContact = async(contact) => {
        try {
            await contactApi.put(`/contact/${contact._id}`, contact)
            dispatch(onSetFavContact(contact))
        } catch (error) {
            console.log(error) 
            openAlertModal('Error adding to favorite list')
        }
    }

    const setFilterContact = (contact) => {
        dispatch(onSetFilterContact(contact))
    }

    const setFilterFavContact = () => {
        dispatch(onSetSortFavContact())
    }

    const startNewContact = async (contact) => {
        try {
            const {data} = await contactApi.post('/contact/new', contact)
            console.log(data)
            dispatch(onSetNewContact({ ...contact, _id: data.contact._id }))
        } catch (error) {
            console.log(error) 
            openAlertModal('Error adding new contact to your list')
        }
    }

    const startDeleteContact = async(contact) => {
        try {
            await contactApi.delete(`/contact/${contact}`)
            dispatch(onDeleteContact(contact))
        } catch (error) {
            console.log(error) 
            openAlertModal('Error removing the contact')
        }
    }

    const startUpdateContact = async(contact) => {
        try {
            await contactApi.put(`/contact/${contact._id}`, contact)
            dispatch(onUpdateContact(contact))
        } catch (error) {
            console.log(error) 
            openAlertModal('Error updating the contact')
        }
    }

    const startgettingContact = async()=>{
        try {
            const {data} = await contactApi.get('contact/')
            dispatch(onLoadContact(data.contacts))
        } catch (error) {
            console.log(error) 
            openAlertModal('Error getting the contacts')
        }
    }

    const clearContactsLogout = ()=>{
        dispatch(onClearContacts()) 
    }
 
    return {
        //properties
        activeContact,
        contacts,
        filteredContacts,
        isActive: !!activeContact,

        //methods
        clearContactsLogout,
        setActiveContact,
        setFavContact,
        setFilterContact,
        startDeleteContact,
        startgettingContact,
        startNewContact,
        startUpdateContact,
        setFilterFavContact
    }
}
