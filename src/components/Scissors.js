import React from "react";
import Option from "./Option";
import ScissorsIcon from "../images/icon-scissors.svg";

const Scissors = ({ pickOption }) => {
  return (
    <Option
      color="yellow"
      src={ScissorsIcon}
      alt="scissors-icon"
      pickOption={pickOption}
    />
  );
};

export default Scissors;
