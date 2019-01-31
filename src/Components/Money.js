import React from "react";
import "./Money.css";

const money = props => {
  const num = props.value.toLocaleString(navigator.language, {
    minimumFractionDigits: 0
  });
  return <p className="money">£{num}</p>;
};

export default money;
