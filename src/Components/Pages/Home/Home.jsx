import React, {useContext} from 'react'
import Search from "../../Search/Search";
import Cards from "../../Cards/Cards";
import { GitHubContext } from "../../GitHubAPI/GitHubContext";

const Home = () => {

    const {users} = useContext(GitHubContext)
    const {items} = users

    return (
        <div className="container p-4">
            <Search/>
            <div className="row">
                {items ? items.map(item => {
                    return (
                        <div className='col-sm-4 mb-4' key={item.id}>
                            <Cards users={item}/>
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}

export default Home
