import React from 'react'
import './App.scss';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from "./Components/Main/Main";
import Home from "./Components/Pages/Home/Home";
import Inform from "./Components/Pages/Inform/Inform";
import Profile from "./Components/Profile/Profile";
import Alert from "./Components/Alert/Alert";
import { AlertState } from "./Components/Alert/AlertContext";
import { GitCont } from "./Components/GitHubAPI/GitHubContext";

function App() {
    return (
        <GitCont>
            <AlertState>
                <BrowserRouter>
                    <Header>
                        <Navbar />
                    </Header>
                    <Main>
                        <Alert/>
                        <Switch>
                            <Route path='/' component={Home} exact/>
                            <Route path='/information' component={Inform}/>
                            <Route path='/profile/:name' component={Profile}/>
                        </Switch>
                    </Main>
                </BrowserRouter>
            </AlertState>
        </GitCont>
    );
}

export default App;
