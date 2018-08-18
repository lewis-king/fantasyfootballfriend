import React, {Component} from 'react';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';
import ReactGA from 'react-ga';
var counter = 0;
class PlayerDetail extends Component {

    componentWillMount() {
        counter = 0;
    }

    increment = () => {
        counter++
        if (this.props.playerDetail.length == counter) {
            counter = 0;
        }
        this.forceUpdate()
    }

    getTeam = (teamCode) => {
        const allTeams = this.props.teams;
        return allTeams.find((team) => {
            return team.id === teamCode;
        });
    }

    render() {
        var playerDetails = this.props.playerDetail
        var playerDetail
        const sizeNotOne = playerDetails.length != 1;
        //TODO: temp conditional logic until I implement resetting of counter between
        //new searches correctly.
        if (sizeNotOne) {
            playerDetail = playerDetails[counter]
        } else {
            playerDetail = playerDetails[0]
        }


        if (playerDetail == null) return null;
        var nextOpponent = '';
        const team = this.getTeam(playerDetail.teamCode)
        if (team != null) {
            nextOpponent = this.getTeam(team.nextOpponentId) || {name: 'None'};
        } else {
            return null;
        }
        ReactGA.event({
            category: 'View',
            action: 'Display player details',
            label: `${playerDetail.fullName}`
        });
        return (
            <div>
                <img src={playerDetail.photoId}></img>
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="2">{playerDetail.fullName}</th>
                    </tr>
                    <tr>
                      <td>Avg. Points per game</td>
                      <td>{playerDetail.avgPointsPerGame}</td>
                    </tr>
                    <tr>
                        <td>Form</td>
                        <td>{playerDetail.form}</td>
                    </tr>
                    <tr>
                        <td>Transfer fee</td>
                        <td><NumberFormat value={playerDetail.costNow} displayType={'text'}
                                          thousandSeparator={true} prefix={'£'}/></td>
                    </tr>
                    <tr>
                        <td>Total points</td>
                        <td>{playerDetail.totalPoints}</td>
                    </tr>
                    <tr>
                        <td>Selected by</td>
                        <td>{playerDetail.selectedByPercent}%</td>
                    </tr>
                    <tr>
                        <td>Goals scored</td>
                        <td>{playerDetail.goalsScored}</td>
                    </tr>
                    <tr>
                        <td>Assists</td>
                        <td>{playerDetail.assists}</td>
                    </tr>
                    <tr>
                        <td>No. times in Dream Team</td>
                        <td>{playerDetail.dreamTeamCount}</td>
                    </tr>
                    <tr>
                        <td>Influence</td>
                        <td>{playerDetail.influence}</td>
                    </tr>
                    <tr>
                        <td>Creativity</td>
                        <td>{playerDetail.creativity}</td>
                    </tr>
                    <tr>
                        <td>Threat</td>
                        <td>{playerDetail.threat}</td>
                    </tr>
                    {/*<tr>
                        <td>Upcoming opposition</td>
                        <td>{nextOpponent.name}</td>
                    </tr>*/}
                    </tbody>
                </table>
                {sizeNotOne ? (
                        <div>
                            <button type="submit" onClick={this.increment} className="btn btn-primary">Next</button>
                        </div>
                    ) : (<div></div>)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    counter = 0
    return {
        playerDetail: state.playerDetail,
        teams: state.teams
    }
}

export default connect(mapStateToProps)(PlayerDetail);
