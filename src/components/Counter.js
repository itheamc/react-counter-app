import React, {useState, useEffect} from 'react'
import { CounterButton, CounterContainer, CounterNumber, MainContainer, RowContainer } from './Styles'

const initialVal = 0;
const colors = ["#C0C0C0", "#808080", "#000000", "#FF0000", "#FFFF00", "#800000", "#808000", "#00FF00", "#008000", "#00FFFF", "#008080", "#0000FF", "#000080", "#FF00FF", "#800080"] 
const Counter = () => {
    const [count, setCount] = useState(initialVal)
    const [c, setC] = useState(colors[Math.floor(Math.random(1, colors.length) * colors.length)])

    useEffect(() => {
        let i = Math.floor(Math.random(1, colors.length) * colors.length)
        setC(colors[i])
        // return () => {
        //     cleanup
        // }
    }, [count])

    // Function to handle increse counter
    const handleIncrease = () => {
        setCount(count + 1)
    }

    // Function to handle decrease counter
    const handleDecrease = () => {
        setCount(count - 1)
    }

    // Function to handle mouse down
    const handleMouseDown = (e) => {
        e.target.style.backgroundColor = "rgba(255, 75, 10, 150)"
        // e.target.style.padding = "1.9vmin 7.9vmin"
    }
    // Function to handle mouse up
    const handleMouseUp = (e) => {
        e.target.style.backgroundColor = null
        // e.target.style.padding = "2vmin 8vmin"
    }

    return (
        <MainContainer>
            <CounterContainer>
                <CounterNumber color= {c}>{count}</CounterNumber>
                <RowContainer>
                    <CounterButton onClick = {handleIncrease} onMouseDown = {(e) => handleMouseDown(e)} onMouseUp = {(e) => handleMouseUp(e)}>Increase</CounterButton>
                    <CounterButton onClick = {handleDecrease} onMouseDown = {(e) => handleMouseDown(e)} onMouseUp = {(e) => handleMouseUp(e)}>Decrease</CounterButton>

                </RowContainer>
                <CounterButton onClick = {() => setCount(initialVal)}>Reset</CounterButton>
            </CounterContainer>
        </MainContainer>
    )
}

export default Counter
