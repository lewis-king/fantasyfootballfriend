import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Trending from './trending';
import TopPicked from './top_picked';

// The Main component renders one of the three provided
// Routes (provided that one matches).
// The trending route will match any pathname that starts
// with '/trending'. The '/' route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/trending' component={Trending}/>
            <Route path='/top-picked' component={TopPicked}/>
        </Switch>
    </main>
)

export default Main