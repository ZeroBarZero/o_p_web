import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, CreateStudy } from 'pages';


class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/create" component={CreateStudy}/>
            </div>
        );
    }
}

export default App;