import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllHistoricPlayerData} from '../actions/index';
import NumberFormat from 'react-number-format';
import ReactGA from 'react-ga';
import DateFormat from 'dateformat';
import {Table} from 'react-bootstrap';

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
        let dateBefore = trendingPlayers.length !== 0 ? trendingPlayers["0"].beforeDate : null;
        let dateNow = trendingPlayers.length !== 0 ? trendingPlayers["0"].nowDate : null;
        const dateFormatStr = "GMT:dd-mm-yy, H:MM";
        dateBefore = dateBefore ? DateFormat(dateBefore, dateFormatStr) : null;
        dateNow = dateNow ? DateFormat(dateNow, dateFormatStr) : null;
        if (!trendingPlayers) return (
            <div>Loading... A spinner would be nice right...</div>
        );
        return (
            <div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th colSpan="1"></th>
                        <th colSpan="1">Start of Season</th>
                        <th colSpan="1">Start of Gameweek</th>
                        <th colSpan="2">As of {dateBefore}</th>
                        <th colSpan="3">As of {dateNow}</th>
                        <th colSpan="3">Net (+/-)</th>
                    </tr>
                    <tr>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Transfer Fee</th>
                        <th colSpan="1">Transfer Fee</th>
                        <th className="trending-table" colSpan="1">Gameweek Transfers In</th>
                        <th className="trending-table" colSpan="1">Gameweek Transfers Out</th>
                        <th colSpan="1">Transfer Fee</th>
                        <th className="trending-table" colSpan="1">Gameweek Transfers In</th>
                        <th className="trending-table" colSpan="1">Gameweek Transfers Out</th>
                        <th className="trending-table" colSpan="1">Transfers (last 24hrs)</th>
                        <th className="trending-table" colSpan="1">Transfer Fee (Start of Season)</th>
                        <th className="trending-table" colSpan="1">Transfer Fee (Start of Gameweek)</th>
                    </tr>
                    {trendingPlayers.map(player => (
                        <tr className="trending-table">

                            <td colSpan="1">{player.fullName}</td>
                            <td><NumberFormat value={player.transferFeeStartSeason} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td><NumberFormat value={player.transferFeeStartGW} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td className="trending-table" colSpan="1">{player.beforeTransfersIn}</td>
                            <td className="trending-table" colSpan="1">{player.beforeTransfersOut}</td>

                            <td><NumberFormat value={player.nowTransferFee} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td className="trending-table" colSpan="1">{player.nowTransfersIn}</td>
                            <td className="trending-table" colSpan="1">{player.nowTransfersOut}</td>
                            <td className={"trending-table " + ((player.netTransfers >= 0) ? 'pos' : 'neg')} colSpan="1">{player.netTransfers}</td>
                            <td className={"trending-table " + ((player.transferFeeChangeStart >= 0) ? 'pos' : 'neg')} colSpan="1"><NumberFormat value={player.transferFeeChangeStart} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                            <td className={"trending-table " + ((player.transferFeeChangeForGW >= 0) ? 'pos' : 'neg')} colSpan="1"><NumberFormat value={player.transferFeeChangeForGW} displayType={'text'}
                                              thousandSeparator={true} prefix={'£'}/></td>
                        </tr>
                    ))}
                    </thead>
                </Table>
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