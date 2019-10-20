import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchOrganisations, selectOrganisation, fetchShifts } from '../actions';
import OrganisationForm from '../containers/organisation_form';


class OrganisationList extends Component {
  componentWillMount() {
    this.props.fetchOrganisations();
  }

  handleClick = (organisation) => {
    this.props.selectOrganisation(organisation); // Will empty shift list first
    this.props.fetchShifts(organisation);
  }

  renderOrganisation = (organisation) => {
    return (
      <li
        key={organisation.id}
        className={organisation === this.props.selectedOrganisation ? 'active' : null}
        onClick={() => this.handleClick(organisation)}>
        <Link to={`/organisations/${organisation.name}`}>
          {organisation.name}
        </Link>
      </li>
    )
  }

  render() {
    console.log(this);
    return (
      <div className="organisations-container">
        <h1>Organisations</h1>
        <ul>
          {this.props.organisations.map(this.renderOrganisation)}
        </ul>
        <OrganisationForm />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    organisations: state.organisations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOrganisations, selectOrganisation, fetchShifts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganisationList);
