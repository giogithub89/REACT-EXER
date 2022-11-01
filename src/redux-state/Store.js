import { createStore } from "redux";
import { counterReduce, decrementCounter, incrementCounter, resetCounter } from "./CounterState";

export const store = createStore(counterReduce)

console.log(store.getState())

store.dispatch(incrementCounter(9))
store.dispatch(decrementCounter(4))
store.dispatch(resetCounter())

