import React, {Component} from 'react';
import Select from 'react-select';
import Slider from 'react-rangeslider'
import {connect} from 'react-redux';
import {fetchPlayersNames, fetchPlayerData, fetchTeams, fetchPlayerDataByCriteria} from '../actions/index';

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchPlayersNames();
        this.props.fetchTeams();
        this.state = {
            price: 0,
            pos: "Goalkeeper"
        }
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

    handleOnChange = (val) => {
        this.setState({
            price: val
        })
    }

    posVal = (event) => {
        this.setState({
            pos: event.target.value
        })
    }

    searchSubmit = () => {
        let criteria = {
            posId: this.state.pos,
            budget: this.state.price
        }
        this.props.fetchPlayerDataByCriteria(criteria)
    }

    render() {
        let {price} = this.state
        const formatMillions = price => {
            return (Math.round(price * 10) / 10) + ' Mil (£)';
        }
        return (
            <div>
                <Select
                    placeholder="Select a player..."
                    name="form-field-name"
                    value=""
                    options={this.options()}
                    onChange={this.logChange}
                />
                <div>
                    <div className="slider-horizontal">
                        <strong>Or search by budget and position</strong>
                        <Slider
                            value={price}
                            orientation="horizontal"
                            min={0.0}
                            max={15.0}
                            step={0.1}
                            format={formatMillions}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="dropdown">
                        <select className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" value={this.state.pos} onChange={this.posVal}>
                            <option value="GK">Goalkeeper</option>
                            <option value="DEF">Defender</option>
                            <option value="MID">Midfielder</option>
                            <option value="FWD">Forward</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;
                        <button type="submit" onClick={this.searchSubmit} className="btn btn-primary">Find</button>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        playersNames: state.playersNames,
        teams: state.teams
    }
}

export default connect(mapStateToProps, {fetchPlayersNames, fetchPlayerData, fetchTeams, fetchPlayerDataByCriteria})(SearchBar);