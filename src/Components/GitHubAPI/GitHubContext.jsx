import React, {createContext, useState} from 'react'
import { getData } from "../../services/getData";

export const GitHubContext = createContext()

export const GitCont = ({children}) => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const generateUsers = async e => {
        const value = e.target.value

        const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
        const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

        await getData(`https://api.github.com/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
            .then(responce => setUsers(responce))
            .then(() => {
                setLoading(false)
            })
    }

    return (
        <GitHubContext.Provider value={{
            generateUsers,
            users,
            loading
        }}>
            {children}
        </GitHubContext.Provider>
    )
}

