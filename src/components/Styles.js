import styled from 'styled-components'


export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const CounterContainer = styled.div`
    width: 80vmin;
    height: 80vmin;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: aliceblue;
`

export const CounterNumber = styled.h1`
    /* font-size: clamp(100px, 25vmin, 200px); // clamp(min, val, max) */
    font-size: 20vmin;
    color: ${({color}) => color || '#121212'};
    font-weight: 900;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
`

export const CounterButton = styled.button`
    padding: 1vmin 4vmin;
    border: 0.1vmin solid violet;
    border-radius: 10vmin;
    color: violet;
    font-size: 4vmin;
    margin: 1vmin;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 700;
    /* background: linear-gradient(red, yellow); */

    :hover {
        background-color: violet;
        color: whitesmoke;
        cursor: pointer;
    }
`


export const RowContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ColumnContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`