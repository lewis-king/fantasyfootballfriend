import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPlayersNames} from '../actions/index';
import SearchBar from './search_bar';
import PlayerDetail from './player_detail';

export default class Home extends Component {

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