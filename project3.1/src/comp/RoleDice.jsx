import styled from "styled-components";

const RoleDice = ({roleDice , currentDice}) => {



  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt="dice images" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
    
  )
}

export default RoleDice;

const DiceContainer=styled.div`
.dice{
  cursor: pointer;
}
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;
p{
  font-size: 20px;
}
`;