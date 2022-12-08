import { useAuthStore } from '../../hooks/useAuthStore';
import { useContactStore } from '../../hooks/useContactStore';

export const Navbar = () => {

    const {LogOut, user} = useAuthStore()
    const {setActiveContact, setFilterContact} = useContactStore()

    const clearStates = ()=>{
        setActiveContact(null)
        setFilterContact(null)
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <button
                className="navbar-brand btn"
                onClick={clearStates}
            >
                My Contacts
            </button>

            <div className=" w-100 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={LogOut}
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        &nbsp;
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}
