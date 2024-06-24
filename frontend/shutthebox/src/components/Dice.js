import React, {useState, useEffect} from 'react'
import './dice.css'
import Dice1 from '../images/Dice1.png';
import Dice2 from '../images/Dice2.png';
import Dice3 from '../images/Dice3.png';
import Dice4 from '../images/Dice4.png';
import Dice5 from '../images/Dice5.png';
import Dice6 from '../images/Dice6.png';

function Dice() {
  var diceImages = [
        Dice1, Dice2, Dice3, Dice4, Dice5, Dice6
  ]

  const [image, setImage] = useState(diceImages[0])
  const [image1, setImage1] = useState(diceImages[1])

  const rollDice = () => {
    var randomnum1 = Math.floor(Math.random() * 6);
    var randomnum2 = Math.floor(Math.random() * 6);
    setImage(diceImages[randomnum1]);
    setImage1(diceImages[randomnum2])
  }

  return (
    <div>
        <center>
            <h1>Roll the Dice</h1>
            <div className='container'>
                <img className='square' src={image}></img>
                <div style={{width: '5px', display: 'inline-block'}}></div>
                <img className='square' src={image1}></img>
            </div>
            <button type="button" class="btn btn-outline-primary" onClick={rollDice}>Roll the Dice</button>
        </center>
    </div>
  )
}

export default Dice
