import React, { useEffect, useState } from 'react'

export default function Counter(props, {initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)

    useEffect(()=> {
      //props.onCounterChange(counter)
      console.log(`current value is ${counter}`)
    } , [counter, props])
      
    

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
