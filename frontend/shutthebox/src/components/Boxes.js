// rfce shortcut
import React, {useState, useEffect} from 'react'
import './dice.css'
import One from '../images/one.png';
import Two from '../images/two.png';
import Three from '../images/three.png';
import Four from '../images/four.png';
import Five from '../images/five.png';
import Six from '../images/six.png';
import Seven from '../images/seven.png';
import Eight from '../images/eight.png';
import Nine from '../images/nine.png';
import Ten from '../images/ten.png';
import Eleven from '../images/eleven.png';
import Twelve from '../images/twelve.png';
import Unavailable from '../images/unavailable.png';

function Boxes() {
    var number = [
        One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve
    ]
    const [data, setData] = useState([{}])

    useEffect(() => {
      fetch("/members").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])
    return (
      <div className='container2'>
        {(typeof data.members === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <div>
                <button className='button'><img className='container1' key={i} src={number[i]}></img></button>
            </div>
          ))
        )}
      </div>
    )
}

export default Boxes

//<img className='container1' key={i} src={number[i]}></img>
