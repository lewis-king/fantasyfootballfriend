import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAllPlayerData} from '../actions/index';
import {Table} from 'react-bootstrap';

class TopPicked extends Component {

  componentWillMount() {
    this.props.fetchAllPlayerData("selectedByPercent");
  }

  render() {
    console.log(this.props.playerDetail);
    if (this.props.playerDetail.length == 0) {
      return <img className="spinner" src="assets/Spinner.svg"/>
    }
    return (
      <div>
        <Table responsive>
          <thead>
          <tr>
            <th colSpan="1">#</th>
            <th colSpan="1">Player</th>
            <th colSpan="1">Selected by (%)</th>
          </tr>
          {this.props.playerDetail.map((player, index) => (
            <tr className="trending-table">
              <td className="trending-table" colSpan="1">{++index}</td>
              <td className="trending-table" colSpan="1">{player.fullName}</td>
              <td className="trending-table" colSpan="1">{player.selectedByPercent}</td>
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

export default connect(mapStateToProps, {fetchAllPlayerData})(TopPicked);