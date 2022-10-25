import React, { useState } from 'react'

export default function Counter(initialValue) {
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter => counter + 1)
    }

  return (
    <div>
        <h1>Counter: {counter} </h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}