import React from "react";
import Money from "./Money";
import "./Transaction.css";

const transaction = props => {
  return (
    <div className="mainTrans">
      <div className="leftTrans">
        <p className="nameTrans">{props.transData.name}</p>
        <p className="emailTrans">{props.transData.email}</p>
      </div>
      <div className="rightTrans">
        <Money value={props.transData.amountSent} />
      </div>
    </div>
  );
};

export default transaction;
