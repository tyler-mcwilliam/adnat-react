import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createOrganisation } from '../actions/index';

class OrganisationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hourlyRate: ''
    };
  }

  componentDidMount() {
    this.organisationBox.focus();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createOrganisation(this.state.name, this.state.hourlyRate);
    this.setState({
      name: '',
      hourlyRate: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="organisation-editor">
        <h1>Create an Organisation</h1>
        <h4>Name</h4>
        <input
          ref={input => this.organisationBox = input}
          type="text"
          name="name"
          className="form-control"
          autoComplete="off"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <h4>Hourly Rate</h4>
        <input
          ref={input => this.organisationBox = input}
          type="number"
          name="hourlyRate"
          className="form-control"
          autoComplete="off"
          value={this.state.hourlyRate}
          onChange={this.handleChange}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createOrganisation }, dispatch);
}

export default connect(null, mapDispatchToProps)(OrganisationForm);
