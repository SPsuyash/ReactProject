import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules,setshowRules]=useState(false);
  const genarateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const resetScore=()=>{
    setscore(0);
  }
  const roleDice = () => {
    if (!SelectedNumber) {
      seterror("You have not selected any Number.");
      return;
    }

   
    seterror("");
    const randomNumber = genarateRandomNumber(1, 7);
    setcurrentDice((prev) => randomNumber);

    if (SelectedNumber === randomNumber) {
      setscore((prev) => prev + 6);
    } else {
      setscore((prev) => prev - 1);
    }
    setSelectedNumber(undefined);
  };


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}></TotalScore>
        <NumberSelector
          error={error}
          seterror={seterror}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        >
          {" "}
        </NumberSelector>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
      <div className="btns">
        <OutlineButton
        onClick={resetScore}>Reset Score</OutlineButton>
        <Button 
        onClick={()=>setshowRules((prev)=>!prev)}>
          {showRules?"Hide ": "Show "}Rules</Button>
      </div>
      {showRules && <Rules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
