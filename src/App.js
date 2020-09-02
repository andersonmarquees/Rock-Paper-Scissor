import React, { useState } from 'react';

import { Player } from './components/Player/Hands';
import { WrapperImage, WrapperTitle } from './components/WrapperComponent';
import { Button, WrapperButton } from './components/ButtonComponent';
import { Winner } from './components/Winner/winner';


function App() {
  
    const symbols = ['rock', 'paper', 'scissor']

    const [ player01, setPlayer01 ] = useState('rock')
    const [ player02, setPlayer02 ] = useState('scissor')

    const winner = () =>  player01 === player02 ? 'Tie!' :
      player01 === 'rock' && player02 === 'scissor' ? "Player One Wins!":
      player01 === 'scissor' && player02 === 'paper' ? "Player One Wins!" :
      player01 === 'paper' && player02 === 'rock' ? "Player One Wins!" : "Player Two Wins!"
    
  
    const playGamePlayer = () => {
      setPlayer01({
        player01: symbols[parseInt(Math.random() * symbols.length)]
      }.player01)
      setPlayer02({
        player02: symbols[parseInt(Math.random() * symbols.length)]
      }.player02)
      
    }

  return (
    <frameElement>

      <WrapperTitle>
        <h1>Rock Paper Scissor</h1>
      </WrapperTitle>

      <WrapperImage>
        <Player symbols={player01}/>
        <Player symbols={player02}/>
      </WrapperImage>

      <Winner>{winner()}</Winner>
      
      <WrapperButton>
        <Button onClick={playGamePlayer}>Start Here</Button>
      </WrapperButton>
        
    </frameElement>
  );
};

export default App;
