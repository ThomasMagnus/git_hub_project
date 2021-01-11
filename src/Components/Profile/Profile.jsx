import React, {useContext} from 'react'
import { GitHubContext } from "../GitHubAPI/GitHubContext";

const Profile = ({match}) => {
    const {users} = useContext(GitHubContext)

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            {users.items.map(item => {
                if (item.login === match.params.name) {
                    console.log(item)
                    return(
                        <div className="card mb-3" key={item.id}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={item.avatar_url} alt="..." className="w-100"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        <a href={item.html_url} className="btn btn-primary" target='_blank'>Профиль</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Profile
