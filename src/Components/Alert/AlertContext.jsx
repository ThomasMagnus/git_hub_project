import {createContext, useState, useContext} from 'react'
import { GitHubContext } from "../GitHubAPI/GitHubContext";

export const AlertContext = createContext()

export const AlertState = ({children}) => {
    const [alertType, setAlert] = useState(false)
    const {users} = useContext(GitHubContext)

    return (
        <AlertContext.Provider value={{text: users.items ? 'Пользователь не найден' : 'Вы ничего не ввели',
            alertType,
            setAlert}}>
            {children}
        </AlertContext.Provider>
    )
}
