import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAllPlayerData} from '../actions/index';
import {Table} from 'react-bootstrap';
import Select from 'react-select';

const sortingOptions = [["Selected by (%)", "selectedByPercent"],
  ["Total Score", "totalPoints"],
  ["Form", "form"],
  ["Value", "costNow"],
  ["ICT Index", "ict_index"],
  ["Influence", "influence"],
  ["Creativity", "creativity"],
  ["Threat", "threat"],
  ["Bonus Points", "bps"]];

class TopPicked extends Component {

  componentWillMount() {
    this.setState({
      optionKey: "Selected by (%)",
      optionVal: "selectedByPercent"
    });
    this.props.fetchAllPlayerData("selectedByPercent");
  }

  options = () => {
    let options = [];
    for (const [key, value] of Object.entries(sortingOptions)) {
      let option = {
        'value': value["1"],
        'label': value["0"]
      };
      options.push(option);
    }
    return options;
  };

  fetchPlayersBySortCriteria = (val) => {
    this.props.fetchAllPlayerData(val.value);
    let optionKey;
    //The below is horrible, my Map hasn't created as I expected so I'm not able to use it how I want. To revisit!
    for (const [key, value] of Object.entries(sortingOptions)) {
      if (value["1"] === val.value) {
        optionKey = value["0"]
      }
    };
    this.setState({
      optionKey,
      optionVal: val.value
    })
  };


  render() {
    console.log(this.props.playerDetail);
    if (this.props.playerDetail.length == 0) {
      return <img className="spinner" src="assets/Spinner.svg"/>
    }
    return (
      <div>
        <Select
          placeholder="Sort by..."
          name="form-field-name"
          value={this.state.optionVal}
          options={this.options()}
          onChange={this.fetchPlayersBySortCriteria}
        />
        <Table responsive>
          <thead>
          <tr>
            <th colSpan="1">#</th>
            <th colSpan="1">Player</th>
            <th colSpan="1">{this.state.optionKey}</th>
          </tr>
          {this.props.playerDetail.map((player, index) => (
            <tr className="trending-table">
              <td className="trending-table" colSpan="1">{++index}</td>
              <td className="trending-table" colSpan="1">{player.fullName}</td>
              <td className="trending-table" colSpan="1">{player[`${this.state.optionVal}`]}</td>
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