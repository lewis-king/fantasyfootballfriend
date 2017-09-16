import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllHistoricPlayerData} from '../actions/index';
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
        return (
            <div>
                <table border="1px solid black">
                    <tbody>
                    <tr>
                        <th colSpan="4">Was (as of yday)</th>
                        <th colSpan="4">Now (as of today)</th>
                    </tr>
                    <tr>
                        <td colSpan="1">Player 1's Name</td>
                        <td colSpan="1">Player 1's Cost</td>
                        <td colSpan="1">Player 1's Transfers In</td>
                        <td colSpan="1">Player 1's Transfers Out</td>
                    </tr>
                    <tr>
                        <td colSpan="1">Player 2's Name</td>
                        <td colSpan="1">Player 2's Cost</td>
                        <td colSpan="1">Player 2's Transfers In</td>
                        <td colSpan="1">Player 2's Transfers Out</td>
                    </tr>

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