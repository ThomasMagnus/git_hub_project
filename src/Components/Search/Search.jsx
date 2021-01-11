import React, {useContext} from 'react'
import { AlertContext } from "../Alert/AlertContext";
import { GitHubContext } from "../GitHubAPI/GitHubContext";

const Search = () => {
    const {setAlert} = useContext(AlertContext)

    const {generateUsers} = useContext(GitHubContext)

    const submitInput = async e => {
        const target = e.target
        if (target.value === '') {
            if (e.code === 'Enter') {
                setAlert(true)
            }
        } else {
            if (e.code === 'Enter') {
                generateUsers(e)
            }
        }
    }

    return (
        <input
            className="form-control"
            type="text"
            placeholder="Введите ник пользователя ..."
            onKeyPress={submitInput}/>
    )
}

export default Search
