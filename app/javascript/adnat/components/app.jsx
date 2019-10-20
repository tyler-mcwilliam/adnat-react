import React from 'react';
import OrganisationList from '../containers/organisation_list';
import ShiftList from '../containers/shift_list';

import logo from '../assets/images/logo.svg';

const App = (props) => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="http://img.app.kiwi/icon/Nn0kFIBGBh3AfjpIEYrr6Gu5uBy4JMJD3Kps7DVIuM0EG7pTGyrDYVS_ISTvTrEll4A" />
      </div>
      <OrganisationList selectedOrganisation={props.match.params.organisation} />
      <ShiftList selectedOrganisation={props.match.params.organisation} />
    </div>
  );
};

export default App;
