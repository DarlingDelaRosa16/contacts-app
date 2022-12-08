import { useDispatch, useSelector } from "react-redux"
import { contactApi } from "../api/contactApi"
import { onChecking, onLogin, onLogOut } from "../store/auth/authSlice"
import { useContactStore } from "./useContactStore"
import { useModalStore } from "./useModalStore"

export const useAuthStore = ()=>{

    const {status, errMs, user} = useSelector(state => state.auth)
    const {clearContactsLogout} = useContactStore()
    const {openAlertModal} = useModalStore()
    const dispatch = useDispatch()

    const startLogin = async({email, password})=>{
        dispatch(onChecking())
        try {
            const {data} =await contactApi.post('/auth', {email, password})
            localStorage.setItem('token', data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            const alert = 'Your credencials are incorrect'
            dispatch(onLogOut(alert))
            openAlertModal(alert)
        }
    }

    const startRegister = async({name, email, password})=>{
        dispatch(onChecking())
        try {
            const {data} = await contactApi.post('/auth/new', {name, email, password})
            localStorage.setItem('token', data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            dispatch(onLogOut(error.response.data?.msg))
            openAlertModal(error.response.data?.msg)
        }
    }

    const checkToken = async()=>{
        const token = localStorage.getItem('token')
        if(!token) return dispatch(onLogOut())

        try {
            const {data} = await contactApi.get('/auth/renew')
            localStorage.setItem('token', data.token)
            dispatch(onLogin({name: data.name, uid: data.uid}))

        } catch (error) {
            localStorage.clear()
            dispatch( onLogOut())
        }
    }

    const LogOut = ()=>{
        clearContactsLogout()
        localStorage.clear()
        dispatch(onLogOut())
    }

    return {
        status,
        errMs,
        user,

        //Methods
        startLogin,
        startRegister,
        checkToken,
        LogOut
    }
}
