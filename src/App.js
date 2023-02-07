import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Grid } from "./Styles";
import { useState } from "react";

// to-do: animations

function App() {
  const [score, setScore] = useState(0);

  return (
    <Grid>
        <Header score={score} />
        <Main setScore={setScore} score={score} />
        <Footer />
    </Grid>
  );
}

export default App;
