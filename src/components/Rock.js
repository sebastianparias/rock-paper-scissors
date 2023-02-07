import React from "react";
import Option from "./Option";
import RockIcon from "../images/icon-rock.svg";

const Rock = ({pickOption}) => {
  return (
    <Option
      color="red"
      src={RockIcon}
      alt="rock-icon"
      pickOption={pickOption}
    />
  );
};

export default Rock;
