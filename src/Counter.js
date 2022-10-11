import React from "react"


export class Counter extends React.Component{
    state = {
        count: this.props.initialValue,
    }

    constructor(props){
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return{
                    count: state.count - this.props.step}
            })
            },this.props.timer)
    }

   render(){
    return <div>
         
        <h1> Count: {this.state.count}</h1></div>
   }

   
    
}
Counter.defaultProps = {
    initialValue: 59,
    timer: 1000,
    step: 1

   }