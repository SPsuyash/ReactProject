import styled from "styled-components";
import StartGame from "./comp/StartGame";
import { useState } from "react";
import GamePlay from "./comp/GamePlay";

function App() {

  const [IsGameStarted,setIsGameStarted]=useState(true);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
    {
      IsGameStarted ? <GamePlay></GamePlay>: <StartGame
      toggle={toggleGamePlay}></StartGame>
    }
   
    </>
  )
}

export default App;

