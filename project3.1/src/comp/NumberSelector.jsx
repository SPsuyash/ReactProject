import styled from "styled-components"
import { useState } from "react";
const NumberSelector = ({seterror,error,SelectedNumber,setSelectedNumber}) => {

  const arrNumber=[1,2,3,4,5,6];

  const numberSelectorHandler=(value)=>{
    setSelectedNumber(value);
    seterror("");
  }
    return (
      <NumberSelectorContainer>
        <p className="error">{error}</p>
    <div className="flex">
      {
        arrNumber.map((value,i)=>(
          <Box 
          isSelected={value===SelectedNumber}
          key={i}
          onClick={()=>numberSelectorHandler(value)}
          >{value}</Box>
        )
        )
      }
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
    
    
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`
p.error{
  color: red;
}
display:flex;
flex-direction: column;
align-items: end;
.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 400;
}
  
`
const Box=styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display:grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => props.isSelected ? "black":"white"};
  color: ${(props) => props.isSelected ? "white":"black"};

`;