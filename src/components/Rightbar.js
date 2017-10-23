import React from 'react';
import Moment from 'react-moment';


class Rightbar extends React.Component {
  constructor(props) {
    super(props) ;
  }

  render() {

    const rightdetails = this.props.selectedTransaction;
    return (

      <div className="right-panel">
        <div className="transaction-info">
          <span>{rightdetails.counterparty_name}</span>
          <span>{rightdetails.amount}</span>
          <span>{rightdetails.currency}</span>
          <span>{rightdetails.operation_type}</span>
        </div>
      </div>
    )
  }
}


export default Rightbar;
