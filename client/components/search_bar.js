import React, {Component} from 'react';
import Select from 'react-select';
import Slider from 'react-rangeslider'
import {connect} from 'react-redux';
import {fetchPlayersNames, fetchPlayerData, fetchTeams} from '../actions/index';

class SearchBar extends Component {

    componentWillMount() {
        this.props.fetchPlayersNames();
        this.props.fetchTeams();
        this.state = {
            priceVal: 0
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
            priceVal: val
        })
    }

    posVal = (val) => {
        console.log(val);
        this.setState({
            posVal: val
        })
    }

    searchSubmit = () => {
        console.log(this.state.posVal)
/*        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })*/
    }

    render() {
        let {priceVal} = this.state
        const formatMillions = priceVal => {
            return (Math.round(priceVal * 10) / 10) + ' Mil (£)';
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
                        <Slider
                            value={priceVal}
                            orientation="horizontal"
                            min={0.0}
                            max={15.0}
                            step={0.1}
                            format={formatMillions}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="btn-toolbar">
                        <div className="btn-group" role="group" aria-label="...">
                            <button type="button" onClick={this.posVal} className="btn btn-default">GK</button>
                            <button type="button" onClick={this.posVal} className="btn btn-default">DEF</button>
                            <button type="button" onClick={this.posVal} className="btn btn-default">MID</button>
                            <button type="button" onClick={this.posVal} className="btn btn-default">ATT</button>
                        </div>
                        <button type="submit" onClick={this.searchSubmit} className="btn btn-success">Submit</button>
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

export default connect(mapStateToProps, {fetchPlayersNames, fetchPlayerData, fetchTeams})(SearchBar);