import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllHistoricPlayerData} from '../actions/index';
import NumberFormat from 'react-number-format';
import ReactGA from 'react-ga';

class Trending extends Component {

    componentWillMount() {
        this.props.fetchAllHistoricPlayerData();
        ReactGA.event({
            category: 'View',
            action: 'Trending Page'
        })
    }

    componentWillUnmount() {
        //this.props.playerDetail = null;
    }

    render() {
        const playerDetails = this.props.playerDetail;
        const {before, now} = playerDetails;
        const date = now ? now["0"].timestamp["0"] : new Date();
        if (!now) return null;
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="4">Was (as of {date})</th>
                        {/*<th colSpan="4">Now (as of today)</th>*/}
                    </tr>
                    <tr>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Cost</th>
                        <th colSpan="1">Transfers In</th>
                        <th colSpan="1">Transfers Out</th>
                        {/*<td colSpan="1">Name</td>
                        <td colSpan="1">Cost</td>
                        <td colSpan="1">Transfers In</td>
                        <td colSpan="1">Transfers Out</td>*/}
                    </tr>
                    {now.map(player => (
                        <tr>
                            <td colSpan="1">{player.fullName}</td>
                            <td><NumberFormat value={player.costNow} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td colSpan="1">{player.transfersInForGW}</td>
                            <td colSpan="1">{player.transfersOutForGW}</td>
                            {/*<td colSpan="1">{player.fullName}</td>
                            <td><NumberFormat value={player.costNow} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td colSpan="1">{player.transfersInForGW}</td>
                            <td colSpan="1">{player.transfersOutForGW}</td>*/}
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        playerDetail: state.playerDetail,
    }
}

export default connect(mapStateToProps, {fetchAllHistoricPlayerData})(Trending);