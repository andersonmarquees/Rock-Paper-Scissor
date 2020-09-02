import React from 'react';


import './index.css'
import paper from '../../assets/image/paper.svg';
import rock from '../../assets/image/rock.svg';
import scissor from '../../assets/image/scissor.svg'


export const Player = props => {
    return (
        <frameElement>
            <img className="player"
                src={
                    props.symbols === 'rock' ? rock : props.symbols === 'scissor' ? scissor : paper
                }
                alt="rock paper scissor"
            />
        </frameElement>
    )
}

