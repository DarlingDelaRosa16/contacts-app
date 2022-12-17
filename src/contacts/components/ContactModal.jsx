import { useEffect } from 'react';
import Modal from 'react-modal';
import { useContactStore } from '../../hooks/useContactStore';
import { useModalStore } from '../../hooks/useModalStore';
import { customStyles } from '../helpers/customStyles';
import { inicialFormState } from '../helpers/inicialState';
import { useForm } from '../hooks/useForm';
import './ContactModal.css';

export const ContactModal = () => {

    const { isOpen, closeModal, modalData, openAlertModal } = useModalStore()
    const { startNewContact, activeContact, startUpdateContact } = useContactStore()

    const { onInputChange, onResetForm, name, lastName, nickName, setDataForm,
        phone, secondPhone, email, redSocial, webSite, country, formState } = useForm(inicialFormState)

    useEffect(() => {
        if (modalData.type === 'update' && isOpen) {
            setDataForm(activeContact)
        } else {
            setDataForm(inicialFormState)
        }
    }, [isOpen])

    const onSubmit = (e) => {
        e.preventDefault()
        if (modalData.type === 'create') {
            startNewContact({ ...formState })
        } else {
            if (formState === activeContact) {
                closeModal()
                return
            }
            if (formState.name.length <= 1 || formState.lastName.length <= 1 || formState.email.length <= 5 || formState.phone.length <= 5) {
                closeModal()
                openAlertModal('We can not UPDATE the contact one of the fields is incorrect or blank')
                return
            }
            startUpdateContact({ ...formState })
        }

        onResetForm()
        closeModal()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <h3>{modalData.title}</h3>
            <hr />
            <form onSubmit={onSubmit}>

                <div className='container'>

                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            name="lastName"
                            autoComplete="off"
                            value={lastName}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Nick Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nick Name"
                            name="nickName"
                            autoComplete="off"
                            value={nickName}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Phone:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                            name="phone"
                            autoComplete="off"
                            value={phone}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Second Phone:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Second Phone"
                            name="secondPhone"
                            autoComplete="off"
                            value={secondPhone}
                            onChange={onInputChange}
                        />
                    </div>

                    <div></div>

                    <div>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="E-mail"
                            name="email"
                            autoComplete="off"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Instagram:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Red Social"
                            name="redSocial"
                            autoComplete="off"
                            value={redSocial}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Web Site:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Web Site"
                            name="webSite"
                            autoComplete="off"
                            value={webSite}
                            onChange={onInputChange}
                        />
                    </div>

                    <div>
                        <label>Country:</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            name="country"
                            autoComplete="off"
                            value={country}
                            onChange={onInputChange}
                        />
                    </div>

                </div>

                <hr />
                <button
                    type="submit"
                    className='btn btn-outline-primary'
                >
                    Save
                    &nbsp;
                    <i className="fa-sharp fa-solid fa-floppy-disk"></i>
                </button>
            </form>
        </Modal>
    )
}
