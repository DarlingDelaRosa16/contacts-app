import Modal from 'react-modal';
import { useModalStore } from '../../hooks/useModalStore';
import { customStyles } from '../helpers/customStyles';

export const AlertModal = () => {

    const { closeAlertModal, alertModal} = useModalStore()

    return (
        <Modal
        isOpen={alertModal.state}
        onRequestClose={closeAlertModal}
        style={customStyles}
        overlayClassName='modal-fondo'
        closeTimeoutMS={200}
        >
            <div >
                <p>{alertModal.alertMs}</p>
                <hr />

                <button 
                    className='btn btn-outline-primary m-1'
                    onClick={()=> closeAlertModal()}    
                >
                    ok
                </button>
            </div>
        </Modal>
    )
}
