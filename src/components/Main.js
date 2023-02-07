import React, { useState } from "react";
import Paper from "./Paper";
import Rock from "./Rock";
import Scissors from "./Scissors";
import { Button } from "../Styles";
import calcScore from "../helpers/calcScore";

const Main = ({ score, setScore }) => {
  const [showResults, setShowResults] = useState(false);
  const [myPick, setMyPick] = useState("");
  const [housePick, setHousePick] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [gameResult, setGameResult] = useState("");

  const pickHouseOption = () => {
    const option = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    setHousePick(options[option]);
    return options[option];
  };

  const pickOption = (option) => {
    if (showResults) return;

    const houseOption = pickHouseOption();

    let myOption;

    switch (
      option //ok
    ) {
      case "rock-icon":
        myOption = "rock";
        break;
      case "paper-icon":
        myOption = "paper";
        break;
      case "scissors-icon":
        myOption = "scissors";
        break;
      default:
        break;
    }

    setMyPick(myOption);

    const result = calcScore(myOption, houseOption);
    switch (result) {
      case -1:
        setGameResult("YOU LOSE");
        break;
      case 0:
        setGameResult("IT'S A TIE");
        break;
      case 1:
        setGameResult("YOU WIN");
        break;
      default:
        break;
    }

    setShowOptions(false);
    setShowResults(true);
    if (result === -1 && score === 0) return;
    setScore(score + result);
  };

  const playAgain = () => {
    setShowOptions(true);
    setShowResults(false);
  };

  return (
    <>
      {showOptions && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="triangle">
            <div className="col1">
              <Rock pickOption={pickOption} />
            </div>
            <div className="col2">
              <Paper pickOption={pickOption} />
            </div>
            <div className="col3">
              <Scissors pickOption={pickOption} />
            </div>
          </div>
        </div>
      )}

      {showResults ? (
        <div className="main__result">
          <div className="row">
            <div className="col__1__1">
              <h4 className="main__result__title">YOU PICKED</h4>
              {myPick === "rock" && <Rock pickOption={pickOption} />}
              {myPick === "paper" && <Paper pickOption={pickOption} />}
              {myPick === "scissors" && <Scissors pickOption={pickOption} />}
            </div>
          </div>

          <div className="col__2__1">
            <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
              <div>
                <h4 className="main__result__title--lg">{gameResult}</h4>
              </div>
              <div>
                <Button
                  backgroundColor="white"
                  color="black"
                  width="100%"
                  onClick={playAgain}
                >
                  PLAY AGAIN
                </Button>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------- */}

          <div className="col__1__2">
            <h4 className="main__result__title">THE HOUSE PICKED</h4>
            {housePick === "rock" && <Rock pickOption={pickOption} />}
            {housePick === "paper" && <Paper pickOption={pickOption} />}
            {housePick === "scissors" && <Scissors pickOption={pickOption} />}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Main;

// to-do: refactor repeated options
