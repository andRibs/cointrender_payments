import React from "react";
import "../App.css";
import Money from "./Money";
import Transaction from "./Transaction";
import DonutChart from "react-donut-chart";
import "./MyAccount.css";

const myAccount = props => {
  let myData = [
    {
      value: props.available
    },
    {
      value: props.totalSent
    }
  ];
  return (
    <div className="right">
      <h1>My account</h1>
      <div className="statMain">
        <div className="stat_sent pairs">
          {props.totalSent && <Money value={props.totalSent} />}
          <p>total sent</p>
        </div>
        <div className="stat_chart">
          <DonutChart
            data={myData}
            startAngle={270}
            colors={["#FFB428", "#EAEAEE"]}
            clickToggle={false}
            legend={false}
            strokeColor={null}
            width={90}
            heigth={90}
            innerRadius={0.31}
            outerRadius={0.62}
          />
        </div>
        <div className="stat_available pairs">
          <Money value={props.available} />
          <p>left available</p>
        </div>
      </div>
      <h3>Transactions</h3>
      {props.sentUsers && (
        <div className="listHistory">
          {props.sentUsers.map((user, i) => {
            return <Transaction key={i} transData={user} />;
          })}
        </div>
      )}
    </div>
  );
};

export default myAccount;
