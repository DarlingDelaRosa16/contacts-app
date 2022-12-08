import { ContactItem } from "./ContactItem"

export const ContactList = () => {
    
    return (
        <div className="card ms-3 mt-3" style={{width: '100%' }}>
        <ul className="list-group list-group-flush">
          <ContactItem />
        </ul>
        
      </div>
    )
}
