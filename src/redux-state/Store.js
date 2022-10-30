import { createStore } from "redux";
import { counterReduce, decrementCounter, incrementCounter, resetCounter } from "./CounterState";

export const store = createStore(counterReduce)

store.dispatch(incrementCounter(9))
store.dispatch(decrementCounter(4))
store.dispatch(resetCounter())

console.log(store.getState())