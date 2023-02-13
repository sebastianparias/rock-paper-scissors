import React from "react";
import Title from "../images/logo.svg";
import { Card } from "../Styles";


const scoreTextStyles = {
  fontSize: "1rem",
  color: "blue",
  textAlign: "center"
};

const scoreStyles = {
  fontSize: "3rem",
  textAlign: "center",
};

const Header = ({ score }) => {
  return (
    <div className="header">
      <div>
        <img src={Title} alt="game title icon"  className="header__logo" />
      </div>
      <Card padding="0.5rem 2rem 0 2rem" borderRadius="0.5rem">
        <div>
          <p style={scoreTextStyles}>SCORE</p>
        </div>
        <div>
          <p style={scoreStyles}>{score}</p>
        </div>
      </Card>
    </div>
  );
};

export default Header;
