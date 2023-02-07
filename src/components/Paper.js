import React from "react";
import Option from "./Option";
import PaperIcon from "../images/icon-paper.svg";

const Paper = ({pickOption}) => {
  return (
    <Option
      color="blue"
      src={PaperIcon}
      alt="paper-icon"
      pickOption={pickOption}
    />
  );
};

export default Paper;
