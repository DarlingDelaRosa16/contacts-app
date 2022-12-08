import { useDispatch, useSelector } from "react-redux"
import { clearErrMs } from "../store/auth/authSlice"
import { onCloseModal, onCloseSmModal, onOpenModal, onOpenSmModal, onSetTitle, onSetType, onAlertOpenModal, onAlertCloseModal } from "../store/modal/modalSlice"


export const useModalStore = () => {
    
    const dispatch = useDispatch()
    const {isOpen, isSmOpen, modalData, alertModal} = useSelector(state => state.modal)
    
    const openModal = ()=> {
        dispatch(onOpenModal())   
    }

    const closeModal =()=>{
        dispatch(onCloseModal())
    }

    const openAlertModal = (text)=> {
        dispatch(onAlertOpenModal(text))
    }

    const closeAlertModal =()=>{
        dispatch(onAlertCloseModal())
        dispatch(clearErrMs())
    }

    const openSmModal = ()=> {
        dispatch(onOpenSmModal())   
    }

    const closeSmModal =()=>{
        dispatch(onCloseSmModal())
    }

    const setTitle = (title)=>{
        dispatch(onSetTitle(title))
    }

    const setType = (type)=>{
        dispatch(onSetType(type))
    }
    return {
        //roperties
        isOpen,
        isSmOpen,
        modalData,
        alertModal,

        //methods
        closeModal,
        closeSmModal,
        openModal,
        openSmModal,
        setTitle,
        setType,
        openAlertModal,
        closeAlertModal
    }
}
