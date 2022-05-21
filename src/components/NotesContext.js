import React,{createContext} from  'react'

export const NotesContext = createContext({}) // used only if component tree is not wrapped into provider

export const NotesProvider = ({children}) => {
const [notes, setNotes] = useState([])

const addNote = (text) => {
    setNotes(...notes,{text})
}

return  <NotesContext.Provider value={{notes, addNote, removeNote}}> 
        {children}
        </NotesContext.Provider>

}