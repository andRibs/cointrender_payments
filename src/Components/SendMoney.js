import React, { Component } from "react";
import "../App.css";
import "./SendMoney.css";
import Logic from "../logic/logic";

class SendMoney extends Component {
  state = {
    name: "",
    email: "",
    amountSent: "",
    errorName: "",
    errorEmail: "",
    errorAmount: "",
    errorNameClass: "",
    errorEmailClass: "",
    errorAmountClass: ""
  };

  handleName = event => {
    const tempName = event.target.value;
    this.setState({ name: tempName });
  };

  handleEmail = event => {
    const tempEmail = event.target.value;
    this.setState({ email: tempEmail });
  };

  handleAmountSent = event => {
    const tempAmountSent = event.target.value;
    this.setState({ amountSent: tempAmountSent });
  };

  handleSubmit = event => {
    event.preventDefault();
    let isValid = true;

    this.setState({
      errorName: "",
      errorEmail: "",
      errorAmount: "",
      errorNameClass: "",
      errorEmailClass: "",
      errorAmountClass: ""
    });

    if (Logic.isBlank(this.state.name)) {
      isValid = false;
      this.setState({
        errorName: "Please enter a valid name",
        errorNameClass: "errorClass"
      });
    }
    if (!Logic.validEmail(this.state.email)) {
      isValid = false;
      this.setState({
        errorEmail: "Please enter a valid email",
        errorEmailClass: "errorClass"
      });
    }

    if (
      Logic.isBlank(this.state.amountSent) ||
      this.state.amountSent <= 0 ||
      isNaN(this.state.amountSent)
    ) {
      isValid = false;
      this.setState({
        errorAmount: "Please enter a valid amount",
        errorAmountClass: "errorClass"
      });
    } else if (this.props.available < this.state.amountSent) {
      isValid = false;
      this.setState({
        errorAmount: "You do not have enough funds",
        errorAmountClass: "errorClass"
      });
    }

    if (isValid) {
      const {
        errorName,
        errorEmail,
        errorAmount,
        errorNameClass,
        errorEmailClass,
        errorAmountClass,
        ...formData
      } = this.state;
      this.myFormRef.reset();
      this.props.onFormSubmit(formData);
      this.setState({
        name: "",
        email: "",
        amountSent: "",
        errorName: "",
        errorEmail: "",
        errorAmount: "",
        errorNameClass: "",
        errorEmailClass: "",
        errorAmountClass: ""
      });
    }
  };

  render() {
    return (
      <div className="left sendForm">
        <h1>Send money</h1>
        <form
          initialValues={{ employed: false }}
          ref={el => (this.myFormRef = el)}
          autoComplete="off"
          className="sendForm"
          onSubmit={this.handleSubmit}
        >
          <div className="formElement ">
            <label htmlFor="userName">Name</label>
            <input
              className={this.state.errorNameClass}
              id="userName"
              value={this.state.name}
              onChange={this.handleName.bind(this)}
              type="text"
            />
            <div>
              {this.state.errorName && (
                <p className="errorText">{this.state.errorName}</p>
              )}
            </div>
          </div>

          <div className="formElement">
            <label htmlFor="email">Email address</label>
            <input
              className={this.state.errorEmailClass}
              id="email"
              value={this.state.email}
              onChange={this.handleEmail.bind(this)}
              type="text"
              autoComplete="new-password"
            />
            {this.state.errorEmail && (
              <div>
                <p className="errorText">{this.state.errorEmail}</p>
              </div>
            )}
          </div>
          <div className="formElement">
            <label htmlFor="amountSent">Amount</label>
            <span className="input-pound left">
              <input
                className={this.state.errorAmountClass}
                id="amountSent"
                value={this.state.amountSent}
                onChange={this.handleAmountSent.bind(this)}
                type="text"
              />
            </span>

            <div>
              {this.state.errorAmount && (
                <p className="errorText">{this.state.errorAmount}</p>
              )}
            </div>
          </div>
          <button className="buttonSend" type="submit" value="Send">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default SendMoney;
