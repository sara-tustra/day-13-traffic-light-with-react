import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const TrafficLight = (props) => {
    const [state, setState] = useState({
        redLight: "redLight",
        yellowLight: "yellowLight",
        greenLight: "greenLight"
    })

    const redOn = () => {
        setState({
            redLight: "redLightOn",
            yellowLight: "yellowLight",
            greenLight: "greenLight"
        })
    }

    const yellowOn = () => {
        setState({
            redLight: "redLight",
            yellowLight: "yellowLightOn",
            greenLight: "greenLight"
        })
    }

    const greenOn = () => {
        setState({
            redLight: "redLight",
            yellowLight: "yellowLight",
            greenLight: "greenLightOn"
        })
    }

    return (

        <div className="container">
            <div className="semaphore">

                <div className={state.redLight} onClick={redOn}></div>
                <div className={state.yellowLight} onClick={yellowOn}></div>
                <div className={state.greenLight} onClick={greenOn}></div>
            </div>
        </div>
    )
}

//onClick={() => cambiarLuz(state.redLight)}


ReactDOM.render(<TrafficLight />, document.querySelector('#root'));