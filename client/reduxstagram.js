import React from 'react';
import {render} from 'react-dom';
import css from './styles/style.styl';
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import store from './store';
import {history} from './store';

// this is is the package that actually allows us to use Redux with React
// because Redux is not just for React.
import { Provider } from 'react-redux';



const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
        </Route>
    </Router>
)



render(router, document.getElementById('root'));
