import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import AppContainer from './components/appContainer';
import ReactGA from 'react-ga';
import props from '../config/props'
import { BrowserRouter } from 'react-router-dom';

ReactGA.initialize(props.analytics);

const createStoreWithMiddleware = applyMiddleware(
    promise
)(createStore);

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Provider store={createStoreWithMiddleware(reducers)}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        );
    }
}

render(<App/>, document.getElementById('app'));