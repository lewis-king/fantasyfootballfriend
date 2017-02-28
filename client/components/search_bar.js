import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { fetchPlayersNames, fetchPlayerData, fetchTeams } from '../actions/index';

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchPlayersNames();
        this.props.fetchTeams();
    }


    options() {
        var fullNames = [];
        if (this.props.playersNames.length > 0) {
            this.props.playersNames.forEach(player => {
                let fullName = {
                    'value': player.fullName,
                    'label': player.fullName
                }
                fullNames.push(fullName)
            })
        }
        return fullNames;
    }

    logChange = (val) => {
        this.props.fetchPlayerData(val.value);
    }


    render() {
        return (
                <Select
                    placeholder="Select a player..."
                    name="form-field-name"
                    value=""
                    options={this.options()}
                    onChange={this.logChange}
                />
        );
    }
}

function mapStateToProps(state) {
    return { playersNames: state.playersNames,
             teams: state.teams}
}

export default connect(mapStateToProps, { fetchPlayersNames, fetchPlayerData, fetchTeams })(SearchBar);