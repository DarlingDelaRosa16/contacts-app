import { useContactStore } from '../../hooks/useContactStore';

export const SortContact = () => {

    const {setFilterFavContact, setActiveContact, setFilterContact} = useContactStore()    
    
    const sortByFavorite = ()=>{
        setActiveContact(null)
        setFilterFavContact()
    }

    const sortAllContacts = ()=>{
        setFilterContact(null)
    }

    return (
        <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                
            </button>
            <ul className="dropdown-menu">
                
                <li>
                    <button 
                        className="dropdown-item" 
                        onClick={sortByFavorite}
                    >
                        Favorites
                    </button>
                </li>

                <li>
                    <button 
                        className="dropdown-item" 
                        onClick={sortAllContacts}
                    >
                        All Contacts
                    </button>
                </li>

            </ul>
        </div>
    )
}
