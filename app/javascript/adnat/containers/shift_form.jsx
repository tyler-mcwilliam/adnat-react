
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createShift } from '../actions/index';

class ShiftForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      start: '',
      finish: '',
      breakLength: ''
    };
  }

  componentDidMount() {
    this.shiftBox.focus();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createShift(this.props.selectedOrganisation, this.state.date,
      this.state.start, this.state.finish, this.state.breakLength);
    this.setState({
      date: '',
      start: '',
      finish: '',
      breakLength: ''
    });
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit} className="organisation-editor">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                  ref={input => this.shiftBox = input}
                  type="date"
                  name="date"
                  className="form-control"
                  autoComplete="off"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
            </td>
            <td>
              <input
                ref={input => this.shiftBox = input}
                type="time"
                name="start"
                className="form-control"
                autoComplete="off"
                value={this.state.start}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                  ref={input => this.shiftBox = input}
                  type="time"
                  name="finish"
                  className="form-control"
                  autoComplete="off"
                  value={this.state.finish}
                  onChange={this.handleChange}
                />
            </td>
            <td>
            <input
                ref={input => this.shiftBox = input}
                type="number"
                name="breakLength"
                className="form-control"
                autoComplete="off"
                value={this.state.breakLength}
                onChange={this.handleChange}
              />
            </td>
            <td colSpan="2"><button type="submit">Send</button></td>
          </tr>
        </tbody>
      </table>
    </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createShift }, dispatch);
}

export default connect(null, mapDispatchToProps)(ShiftForm);
