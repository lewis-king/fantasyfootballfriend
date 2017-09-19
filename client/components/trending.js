import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllHistoricPlayerData} from '../actions/index';
import NumberFormat from 'react-number-format';
import ReactGA from 'react-ga';
import DateFormat from 'dateformat';

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
        const trendingPlayers = this.props.playerDetail;
        let dateBefore = trendingPlayers.length != 0 ? trendingPlayers["0"].beforeDate : null;
        let dateNow = trendingPlayers.length != 0 ? trendingPlayers["0"].nowDate : null;
        const dateFormatStr = "GMT:dd-mm-yy, H:MM";
        dateBefore = dateBefore ? DateFormat(dateBefore, dateFormatStr) : null;
        dateNow = dateNow ? DateFormat(dateNow, dateFormatStr) : null;
        if (!trendingPlayers) return null;
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="1"></th>
                        <th colSpan="3">Was (as of {dateBefore})</th>
                        <th colSpan="3">Now (as of {dateNow})</th>
                        <th colSpan="1">Net (+/-)</th>
                    </tr>
                    <tr>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Cost</th>
                        <th colSpan="1">Transfers In</th>
                        <th colSpan="1">Transfers Out</th>
                        <th colSpan="1">Cost</th>
                        <th colSpan="1">Transfers In</th>
                        <th colSpan="1">Transfers Out</th>
                        <th colSpan="1">Transfers</th>
                    </tr>
                    {trendingPlayers.map(player => (
                        <tr>
                            <td colSpan="1">{player.fullName}</td>
                            <td><NumberFormat value={player.beforeTransferFee} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td colSpan="1">{player.beforeTransfersIn}</td>
                            <td colSpan="1">{player.beforeTransfersOut}</td>

                            <td><NumberFormat value={player.nowTransferFee} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td colSpan="1">{player.nowTransfersIn}</td>
                            <td colSpan="1">{player.nowTransfersOut}</td>
                            <td colSpan="1">{player.netTransfers}</td>
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