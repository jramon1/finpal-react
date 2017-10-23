import React from 'react';
import {
  // Switch,
  // Route,
  Link
} from 'react-router-dom'

class Leftbar extends React.Component {


  render() {

    return (

      <div className="left-panel">
      <div className="finpal—logo">FINPAL</div>
        <div className="O-T">
        <Link to="/">Home</Link>
          <span>Overview</span>
          <Link to="/transactions">Transactions</Link>
        </div>
        <div className="O-T">
          <span>Transfers</span><span>Invoices</span>
        </div>
        <div className="O-T">
          <span>Manage Cards</span><span>Manage Accounts</span>
        </div>
        <div className="settings">
          <span>Team</span><span>Integrations</span><span>Settings</span>
        </div>

      </div>


    )
  }
}


export default Leftbar;
