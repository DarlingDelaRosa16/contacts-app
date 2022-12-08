import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/LoginPage";
import { ContactPage } from "../contacts/pages/ContactPage";
import { useAuthStore } from "../hooks/useAuthStore";

export const AppRouter = () => {
    
    const {status, checkToken} = useAuthStore() 

    useEffect(() => {
      checkToken()
    }, [])

    if(status === 'checking'){
        return(
            <h3>Loading</h3>
        )
    } 
    
    return (
        <Routes>
            {
                (status === 'not-authenticated')
                ? (
                    <>
                    <Route path="/auth/*" element={<LoginPage/>} />
                    <Route path="/*" element={ <Navigate to='/auth/login' /> }/>
                    </>
                )
                :(
                    <>
                    <Route path="/" element={<ContactPage/>} />
                    <Route path="/*" element={ <Navigate to='/' /> }/>
                    </>
                ) 
            }
        </Routes>
    )
}
