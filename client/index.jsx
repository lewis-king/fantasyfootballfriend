import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

class App extends React.Component {
    render () {
        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <Home />
            </Provider>
        );
    }
}

render(<App/>, document.getElementById('app'));