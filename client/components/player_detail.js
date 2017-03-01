import React, {Component} from 'react';
import {connect} from 'react-redux';
import NumberFormat from 'react-number-format';

class PlayerDetail extends Component {

    getTeam = (teamCode) => {
        const allTeams = this.props.teams;
        return allTeams.find((team) => {
            return team.id === teamCode;
        });
    }

    render() {
        var nextOpponent = '';
        const team = this.getTeam(this.props.playerDetail.teamCode)
        if (team != null) {
            nextOpponent = this.getTeam(team.nextOpponentId) || {name: 'None'};
        } else {
            return null;
        }
        return (
            <div>
                <img src={this.props.playerDetail.photoId}></img>
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="2">{this.props.playerDetail.fullName}</th>
                    </tr>
                    <tr>
                        <td>Form</td>
                        <td>{this.props.playerDetail.form}</td>
                    </tr>
                    <tr>
                        <td>Transfer fee</td>
                        <td><NumberFormat value={this.props.playerDetail.costNow} displayType={'text'}
                                          thousandSeparator={true} prefix={'£'}/></td>
                    </tr>
                    <tr>
                        <td>Total points</td>
                        <td>{this.props.playerDetail.totalPoints}</td>
                    </tr>
                    <tr>
                        <td>Avg. Points per game</td>
                        <td>{this.props.playerDetail.avgPointsPerGame}</td>
                    </tr>
                    <tr>
                        <td>Selected by</td>
                        <td>{this.props.playerDetail.selectedByPercent}%</td>
                    </tr>
                    <tr>
                        <td>Goals scored</td>
                        <td>{this.props.playerDetail.goalsScored}</td>
                    </tr>
                    <tr>
                        <td>Assists</td>
                        <td>{this.props.playerDetail.assists}</td>
                    </tr>
                    <tr>
                        <td>No. times in Dream Team</td>
                        <td>{this.props.playerDetail.dreamTeamCount}</td>
                    </tr>
                    <tr>
                        <td>Influence</td>
                        <td>{this.props.playerDetail.influence}</td>
                    </tr>
                    <tr>
                        <td>Creativity</td>
                        <td>{this.props.playerDetail.creativity}</td>
                    </tr>
                    <tr>
                        <td>Threat</td>
                        <td>{this.props.playerDetail.threat}</td>
                    </tr>
                    <tr>
                        <td>Upcoming opposition</td>
                        <td>{nextOpponent.name}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {playerDetail: state.playerDetail,
            teams: state.teams}
}

export default connect(mapStateToProps, {null})(PlayerDetail);
