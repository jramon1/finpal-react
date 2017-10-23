import React, { Component } from 'react';
import Navbar from './Navbar';
import Leftbar from './Leftbar';
import Rightbar from './Rightbar';
import Transaction from './Transaction';
import moment from 'react-moment';
import '../App.css';
import {
  Switch,
  Route,
  // Link
} from 'react-router-dom'

const sortAsc = (a, b) => new Date(a.created_at) - new Date(b.created_at);
const sortDesc = (a, b) => new Date(b.created_at) - new Date(a.created_at);



class Transactions extends Component {
  constructor(props) {
    super();
    this.sortTransactions = this.sortTransactions.bind(this);
    this.setSelectedTransaction = this.setSelectedTransaction.bind(this);
    this.state = {
      transactions:[]
    }
  }
  sortTransactions() {
    this.setState(prevState => {
      const { transactions, sortDir } = prevState;
      const newSortDir = sortDir === null || sortDir === "asc" ? "desc" : "asc";
      return {
        sortDir: newSortDir,
        transactions: transactions.sort(newSortDir === "asc" ? sortAsc : sortDesc)
      };
    });
  }


  componentWillMount() {
    console.log('Mounting Transactions')
    const promiseTransaction = fetch("http://private-5d708-interviewfront.apiary-mock.com/transactions");
    promiseTransaction.then(data => data.json())
               .then(data => {
                  const transactions = data.transactions;
                  console.log(transactions);
                  this.setState({ transactions });

                })

               .catch((err) => {console.log(err)});
  }

  setSelectedTransaction(values) {
   // this function receives the selected transaction value
   // from the Trasaction component
   // and then passes the value to the App component
   // because we want the value to be accessible by another component in the
   // app component
   this.props.onTransactionSelected(values);
  }

  render(){
    const { transactions } = this.state;

    return (
    <div className="main-transactions">
      <div className="transaction-title">
        <span>Created at <button onClick={() => this.sortTransactions()}>filter</button></span>
        <span>Counterparty</span>
        <span>Payment type</span>
        <span>Amount</span>
        <span>Attach</span>
      </div>

      { transactions.map( transaction => (
        <Transaction displayInfo={this.displayInfo} setSelectedTransaction={this.setSelectedTransaction} transactions={this.state.transactions} key={transaction.id} {...transaction} />
      )) }

    </div>
    )
  }
}


class App extends Component {
   constructor(props) {
    super();
    this.onTransactionSelected = this.onTransactionSelected.bind(this);
     this.state = {
      transactions: {},
      selectedTransaction:{}
    }
  }

  onTransactionSelected(transaction) {
    this.setState({ selectedTransaction: transaction });
  }

  render() {

    return (
      <div className="App">
        <Leftbar />
        <Rightbar selectedTransaction={this.state.selectedTransaction} />
        <Navbar />

        <Switch>
          <Route exact path="/" component={()=><h1>Finpal Homepage</h1>} />
         <Route exact path="/transactions" render={routeProps => <Transactions onTransactionSelected={this.onTransactionSelected} {...routeProps} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
