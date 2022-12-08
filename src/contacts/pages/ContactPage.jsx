import { useEffect } from "react"
import { useContactStore } from "../../hooks/useContactStore"
import { ContactList } from "../components/ContactList"
import { ContactModal } from "../components/ContactModal"
import { ContactSearch } from "../components/ContactSearch"
import { ContactView } from "../components/ContactView"
import { DeleteContact } from "../components/DeleteContact"
import { NewContact } from "../components/NewContact"
import { SortContact } from "../components/SortContact"
import { Navbar } from "../ui/Navbar"

export const ContactPage = () => {
    
    const {isActive, startgettingContact} = useContactStore()

    useEffect(() => {
        startgettingContact()
    }, [])
    
    return (
        <>
            <Navbar/>
            <div className="row d-flex ">
                <ContactSearch className="col-5"/>
                <div className="col-2 mt-3 d-flex justify-content-end">
                    <SortContact/>
                    <NewContact/>
                </div>
            </div>
            <div className="row">
                <div className="col-5">
                    <ContactList />   
                </div>
                <div className="col-7">
                    {
                        (isActive)
                        ? <ContactView />
                        : ''
                    }
                </div>
            </div>
            <ContactModal/>
            <DeleteContact/>
        </>
    )
}
