import { useContactStore } from "../../hooks/useContactStore"
import { useModalStore } from "../../hooks/useModalStore"

export const ContactView = () => {

    const { activeContact, setFavContact } = useContactStore()
    const {openSmModal, openModal, setTitle, setType} = useModalStore()

    const updateContact = ()=>{
        openModal()
        setTitle(`Updating contact (${activeContact.name} ${activeContact.lastName})`)
        setType('update')
    }
    
    return (
        <div className="ms-3" >

            <div className="d-flex justify-content-between">
                <h2>{activeContact?.name}  {activeContact?.lastName}</h2>
                <span
                    onClick={() => setFavContact({...activeContact, favorite: !activeContact?.favorite})}
                >
                    {
                        (activeContact.favorite)
                        ? <i className="fa-solid   fa-heart" style={{fontSize: '40px'}}></i>
                        : <i className="fa-regular fa-heart" style={{fontSize: '40px'}}></i>
                    }
                </span>
            </div>

            <hr />

            <h5>Name:</h5><p>{activeContact?.name} </p>
            <h5>Last Name:</h5><p>{activeContact?.lastName}</p>
            <h5>Nick name:</h5> <p> {activeContact?.nickName}</p>
            <h5>Number:</h5><p>{activeContact?.phone}</p>
            <h5>Second Number:</h5><p>{activeContact?.secondPhone}</p>
            <h5>Email:</h5><p> {activeContact?.email}</p>
            <h5>Instagram:</h5> <a href="#"> {activeContact?.redSocial}</a>
            <h5>Web Site:</h5> <a href="#">{activeContact?.webSite}</a>
            <h5>Country:</h5><p>{activeContact?.country}</p>
            <hr />

            <button 
                className="btn btn-outline-primary"
                onClick={updateContact}
            >
                <i className="fa-solid fa-pencil"></i>
            </button>
            <button 
                className="btn btn-outline-danger ms-1"
                onClick={()=> openSmModal()}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    )
}
