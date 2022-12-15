import * as XLSX from 'xlsx';
import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { customStyles } from '../helpers/customStyles';
import { useState } from 'react';
import { useContactStore } from '../../hooks/useContactStore';

export const ImportContact = () => {

    const {importModal, closeImportModal} = useModalStore()
    const {startNewContact} = useContactStore()
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
        contactsFromFile.map(contact => {
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
