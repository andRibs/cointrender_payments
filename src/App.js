import React, { Component } from "react";
import "./App.css";
import SendMoney from "./Components/SendMoney";
import MyAccount from "./Components/MyAccount";
import Transaction from "./Components/Transaction";
import Money from "./Components/Money";
import DonutChart from "react-donut-chart";

class App extends Component {
  state = {
    available: 13500,
    totalSent: 0,
    sentUsers: []
  };

  handleSubmit = formData => {
    let aux = parseInt(formData.amountSent);
    let oldAvailable = this.state.available;
    let oldSent = this.state.totalSent;
    this.setState({
      sentUsers: this.state.sentUsers.concat([formData]),
      available: oldAvailable - aux,
      totalSent: oldSent + aux
    });
  };

  render() {
    return (
      <div className="main">
        <SendMoney
          onFormSubmit={this.handleSubmit}
          available={this.state.available}
        />
        <MyAccount
          available={this.state.available}
          totalSent={this.state.totalSent}
          sentUsers={this.state.sentUsers}
        />
      </div>
    );
  }
}

export default App;
