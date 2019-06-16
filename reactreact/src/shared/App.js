import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, CreateStudy, Main } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Main}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/create" component={CreateStudy}/>
            </div>
        );
    }
}

export default App;