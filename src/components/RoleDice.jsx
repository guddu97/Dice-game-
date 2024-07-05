
import styled from "styled-components";



const RoleDice = ({roleDice,currentDice}) => {


  return (
    <DiceContainer>
    <div className="dice" onClick={roleDice}>
      <img src={`/images/dice_${currentDice}.png`} alt="logo" />
    </div>
    <p>Click On dice to roll</p>
    </DiceContainer>
  )
}


export default RoleDice;

const DiceContainer=styled.div`
    margin-top: 48px;
    display: flex;
   flex-direction: column;
   align-items: center;

    p{
        font-size: 24px;

    }
.dice{
    cursor: pointer;
}
`
