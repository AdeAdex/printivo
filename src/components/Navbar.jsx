import React from 'react'
import { useState } from 'react'

const Navbar = () => {
    let divStyle = {
        color: 'red',
        fontSize: '45px',
        backgroundColor: 'green'
    }

    let food = {
        swallow: "Amala",
        soup: "Abula", 
        animal: "Ponmo",
        animal2: "Beef"
    }

    let myname = "Adeolu"
    let mySchool = "SQI"
    let number = 8
    const [first, setfirst] = useState(0)

const increment = () => {
        setfirst(first + 1)
}

    return (
        <>
        <div style={{color: 'red', backgroundColor: 'yellow'}}>Navbar</div>
        {food.swallow}
        <div style={divStyle}>This is styling</div>
        {number==8?<div>Even number</div>:<div>Old Number</div>}
        <div></div>
        <button onClick={increment}>Increase</button>
        <div>{first}</div>
        </>

  )
}

export default Navbar