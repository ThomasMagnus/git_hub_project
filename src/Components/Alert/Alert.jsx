import React, {useContext} from 'react'
import { AlertContext } from "./AlertContext";

const Alert = () => {
    const { text, alertType, setAlert } = useContext(AlertContext)

    if (alertType === false) return null

    const hideAlert = () => {
        setAlert(false)
    }

    return (
        <div className={"container mt-4"}>
            <div className={`alert alert-warning alert-dismissible" role="alert`}>
                <strong>{text}</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true" onClick={hideAlert}>&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Alert
