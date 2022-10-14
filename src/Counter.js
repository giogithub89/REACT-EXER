import React from "react"


export class Counter extends React.Component{
    state = {
        count: this.props.initialValue,
    }
        handleCounter = ()=> {
            this.setState((state) => {
                return{
                    count: state.count + this.props.step 
                }
            })
        }
   
    render(){
        return (<div>
            <button onClick={this.handleCounter}>Click me</button>
             
            <h1> Le mie medaglie d'oro: {this.state.count} </h1></div>
            )
       }
}

Counter.defaultProps = {
    initialValue: 0,
    step: 1

   }