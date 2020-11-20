import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import About from './components/About';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/blog' component={Blog} />
                    <Route path='/about' component={About} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
