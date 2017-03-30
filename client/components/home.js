import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPlayersNames} from '../actions/index';
import SearchBar from './search_bar';
import PlayerDetail from './player_detail';
import ReactGA from 'react-ga';

export default class Home extends Component {

    componentWillMount() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="main">
                <div className="search">
                    <SearchBar />
                </div>
                <PlayerDetail />
            </div>
        );
    }
}