import * as XLSX from 'xlsx';
import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { customStyles } from '../helpers/customStyles';
import { useState } from 'react';
import { useContactStore } from '../../hooks/useContactStore';

export const ImportContact = () => {

    const {importModal, closeImportModal, openAlertModal} = useModalStore()
    const {startNewContact, contacts} = useContactStore()
    const [contactsFromFile, setContactsFromFile] = useState([])

    const importFile = async (e) => {
        e.preventDefault()

        const file = e.target.files[0]
        const data = await file.arrayBuffer()
        const workBook = XLSX.read(data)

        const workBookSheets = workBook.Sheets[workBook.SheetNames[0]]
        const jsonData = XLSX.utils.sheet_to_json(workBookSheets)

        setContactsFromFile(jsonData)

    }

    const saveContactFromFile = ()=> {
        
        const emailFromExcel =  contacts.map(contact => contact.email)
        const contactsDoExist = contactsFromFile.filter(contact => emailFromExcel.indexOf(contact.email) !== -1 )
        const contactsAbleToCreate = contactsFromFile.filter(contact => emailFromExcel.indexOf(contact.email) === -1 )
        
        openAlertModal(
            <> 
                <h6>Those contact already exists</h6> <hr />
                <ul>
                    {contactsDoExist.map(contact =>( <li key={contact.email}>{contact.name} - {contact.email} - {contact.phone}</li> ))} 
                </ul>
            </>
        )

        contactsAbleToCreate.map(contact => {
                startNewContact({...contact, favorite: false})
        })
    }

    const confirmationClick = ()=>{
        saveContactFromFile()
        closeImportModal()
    }

    return (
        <Modal
            isOpen={importModal}
            onRequestClose={closeImportModal}
            style={customStyles}
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <form>
                <input type='file' onChange={importFile} />
            </form>
            <hr />
            <button
                onClick={confirmationClick}
                className="btn btn-outline-primary "
            >
                ok
            </button>
        </Modal>
    )
}
