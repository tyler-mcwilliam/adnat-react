import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchShifts, appendShift } from '../actions';
import Shift from '../components/shift';
import ShiftForm from '../containers/shift_form';

class ShiftList extends Component {
  componentWillMount() {
    this.fetchShifts();
  }

  componentDidMount() { // For the first organisation
    this.subscribeActionCable(this.props);
  }

  componentWillReceiveProps(nextProps) { // For after switching organisations
    if (this.props.selectedOrganisation != nextProps.selectedOrganisation) {
      this.subscribeActionCable(nextProps);
    }
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    if (this.list) {
      this.list.scrollTop = this.list.scrollHeight;
    }
  }

  fetchShifts = () => {
    this.props.fetchShifts(this.props.selectedOrganisation);
  }

  subscribeActionCable = (props) => {
    App[`organisation_${props.selectedOrganisation}`] = App.cable.subscriptions.create(
      { organisation: 'OrganisationsOrganisation', name: props.selectedOrganisation },
      {
        received: (shift) => {
          if (shift.organisation === props.selectedOrganisation) {
            props.appendShift(shift);
          }
        }
      }
    );
  }

  render () {
    if (!this.props.shifts.map) {
      return null;
    }
    console.log(this);
    return (

      <div className="organisation-container">
        <div className="organisation-title">
          <span>Organisation: {this.props.selectedOrganisation}</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Shift Date</th>
              <th>Start Time</th>
              <th>Finish Time</th>
              <th>Break Length (Minutes)</th>
              <th>Hours Worked</th>
              <th>Shift Cost</th>
            </tr>
          </thead>
          <tbody>
            {
                this.props.shifts.map((shift) => {
                  return <Shift key={shift.id} {...shift} />;
              })
            }
          </tbody>
        </table>
        <ShiftForm selectedOrganisation={this.props.selectedOrganisation} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    shifts: state.shifts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchShifts, appendShift }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftList);
