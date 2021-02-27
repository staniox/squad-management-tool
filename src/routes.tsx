import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import TeamsAdd from './pages/Teams/Add/index'

const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/teams/add" exact component={TeamsAdd}/>
        </Switch>
    )
}

export default Routes;