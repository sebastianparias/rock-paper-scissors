export default function calcScore(playerOption, computerOption) {
  switch (playerOption) {
    case "rock":
      if (computerOption === "paper") {
        return -1;
      }
      if (computerOption === "rock") {
        return 0;
      }
      if (computerOption === "scissors") {
        return 1;
      }
      break;

    case "paper":
      if (computerOption === "paper") {
        return 0;
      }
      if (computerOption === "rock") {
        return 1;
      }
      if (computerOption === "scissors") {
        return -1;
      }
      break;

    case "scissors":
      if (computerOption === "paper") {
        return 1;
      }
      if (computerOption === "rock") {
        return -1;
      }
      if (computerOption === "scissors") {
        return 0;
      }
      break;
    default:
      break;
  }
}
