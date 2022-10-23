import { useCounter } from "./UseCounter"

function CustomHooks({initialValue = 0}) {
    const {counter, onIncrement, onDecrement, onReset} = useCounter(initialValue)
    return(
        <div>
            <h1>I miei trofei {counter} </h1>
            
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )

}

export default CustomHooks