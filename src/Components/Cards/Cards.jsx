import React from 'react'
import {Link} from "react-router-dom";

const Cards = ({users}) => {

    return (
        <div className="card mt-4">
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={users.avatar_url} className="card-img-top" alt="photo"/>
            <div className="card-body">
            <h5 className="card-title">{users.login}</h5>
            <Link to={"/profile/" + users.login} className="btn btn-primary">Profile</Link>
            </div>
        </div>
    )
}

export default Cards
