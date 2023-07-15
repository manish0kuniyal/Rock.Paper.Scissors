import React, { useState } from 'react';
import { useEffect } from 'react';
export const Test = () => {
  let choice = ["rock", "paper", "scissors"];
  const [player, setPlayer]=useState("")
  const [player2, setPlayer2]=useState("")
  const [winner,setWinner]=useState("")

  useEffect(()=>{
    if( (player==="rock" && player2==="scissors") || (player==="paper" && player2==="rock") || (player==="scissors" && player2==="paper"))
    setWinner("YOU WON")
    else if(player===player2 && player!="")
    setWinner("DRAW")
    else if(player!="")
    setWinner("PLAYER 2 WON")
  }, [player, player2])
function game(x){
    setPlayer(x)
    setPlayer2(choice[Math.floor(Math.random()*3)])
     
}

  return (
    <div
    >
        
      <button onClick={()=>game("rock")}>Rock</button><br/><br/>
      <button onClick={()=>game("paper")}>Paper</button><br/><br/>
      <button onClick={()=>game("scissors")}>Scissors</button><br/><br/>
      <h2>YOU {"->"} {player}</h2><br/>
      <h2>  PLAYER2 {"->"} {player2}</h2>
      <h3>{winner}</h3>
    </div>
  );
};

export default Test;
