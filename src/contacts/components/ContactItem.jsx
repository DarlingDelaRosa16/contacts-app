import { useEffect } from "react"
import { useState } from "react"
import { useContactStore } from "../../hooks/useContactStore"

export const ContactItem = () => {

  const {setActiveContact, contacts,filteredContacts}= useContactStore()
  const [listState, setListState] = useState(contacts)

  useEffect(() => {
    if(filteredContacts === null) {
      setListState(contacts)
    }else{
      setListState(filteredContacts)
    }
    
  }, [filteredContacts, contacts])
  
  return (
    <>
      {
        listState.map(item =>  (
          <button 
            className="list-group-item d-flex" 
            key={item._id}
            onClick={()=> setActiveContact(item)}
          >
            {item.name} {item.lastName}
          </button>
        ))
      }
    </>
  )
}


