import Modal from 'react-modal';
import { useContactStore } from '../../hooks/useContactStore';
import { useModalStore } from '../../hooks/useModalStore';
import { customStyles } from '../helpers/customStyles';

export const DeleteContact = () => {

    const {activeContact, startDeleteContact, setActiveContact} = useContactStore()
    const {isSmOpen, closeSmModal} = useModalStore()

    const deleteConfirmation = ()=>{
        startDeleteContact(activeContact?._id)
        closeSmModal()
        setActiveContact(null)
    }

    return (
        <Modal
        isOpen={isSmOpen}
        onRequestClose={closeSmModal}
        style={customStyles}
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
        >
            <div >
                <p>Do you really want to delete <strong>{activeContact?.name} {activeContact?.lastName}</strong> from your contacts?</p>
                <hr />
                <button 
                    className='btn btn-outline-danger m-1'
                    onClick={deleteConfirmation}    
                >
                    Yes
                </button>

                <button 
                    className='btn btn-outline-primary m-1'
                    onClick={()=> closeSmModal()}    
                >
                    No
                </button>
            </div>
        </Modal>
    )
}
