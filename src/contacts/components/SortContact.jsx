import { useContactStore } from '../../hooks/useContactStore';

export const SortContact = () => {

    const {setFilterFavContact, setActiveContact} = useContactStore()    
    
    const sortByFavorite = ()=>{
        setActiveContact(null)
        setFilterFavContact()
    }

    return (
        <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                
            </button>
            <ul className="dropdown-menu">
                
                <li>
                    <button 
                        className="dropdown-item" 
                        onClick={sortByFavorite }
                    >
                        Favorites
                    </button>
                </li>

            </ul>
        </div>
    )
}
