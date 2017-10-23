import React from 'react';
import Moment from 'react-moment';
import Paperclip from '../paperclip.svg';


var paperclip = {
  width: "19px",
  height: "19px",
  padding: "-70px 0 0 0",
  backgroundImage: `url(${Paperclip})`,
  backgroundSize: "cover"
};

class Transaction extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const selectedtrans = this.props;
    // on click a function is called
    // this function is defined in the parent component
    // to receive the selected transaction values
     this.props.setSelectedTransaction(selectedtrans);
  }

  render(key) {

    const details = this.props;
    return (

      <div className="transaction" onClick={(e) => this.handleClick(e)}>
        <span><Moment format="DD-MM-YYYY">{details.created_at}</Moment></span>
        <span>{details.counterparty_name}</span>
        <span>payment type</span>
        <span>{details.amount}</span>
        <span><div style={paperclip}></div></span>
      </div>


    )
  }
}



export default Transaction;
