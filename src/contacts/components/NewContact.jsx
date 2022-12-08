import { useModalStore } from "../../hooks/useModalStore"

export const NewContact = () => {

    const {openModal, setTitle, setType} = useModalStore()

    const createContact = ()=>{
        openModal()
        setTitle('Create New Contact')
        setType('create')
    }
    
    return (
        <button
            className="btn btn-outline-primary ms-1"
            onClick={createContact}
        >
            <i className="fa-solid fa-plus"></i>
        </button>
    )
}
