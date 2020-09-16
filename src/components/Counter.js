import React, { useState } from 'react'
import '../assets/styles/Reset.css'


const Counter = () => {
    const [counter, setCounter] = useState(0);
    if (counter < 0) {
        setCounter(0)
    }
    return (
        <section className="myCounter">
      

            <h2 className="visor">{counter}</h2>

            <button className="plus" onClick={() => setCounter(counter + 1)} >+</button>
            <button className="reset" onClick={() => setCounter(0)} >Reset</button>
            <button className="minus" onClick={() => setCounter(counter - 1)} >-</button>
      
            <h2 className="title">React-Counter by <span>Ma</span>rkus</h2>
        </section>
    )
}

export default Counter;