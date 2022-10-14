import React from "react"


export class ClickTracker extends React.Component{
    state = {
        //count: this.props.initialValue,
        target:""
    }
        handleCounter = (event)=> {
           // const name = event.target.name
            
            const value = event.target.innerText

            this.setState(() => {
                
                return{
                    //count:  + this.props.step 
                    target: value
                }
            })
        }
   
    render(){
        return (
        <div>
            
             <h1>Aggiungi le tue medaglie</h1>

             <button onClick={this.handleCounter} name="gold" >Add Gold</button>
            {/* <h3> Le mie medaglie d'oro: {this.state.count} </h3> */}

            <button onClick={this.handleCounter} name="gold" >Add Silver</button>
            {/* <h3> Le mie medaglie d'argento: {this.state.count} </h3> */}

            <button onClick={this.handleCounter} name="gold">Add Bronze</button>
            {/* <h3> Le mie medaglie di bronzo: {this.state.count} </h3> */}
            
            <h1>Hai cliccato su : {this.state.target}</h1>

            </div>
            )
       }
}

ClickTracker.defaultProps = {
    initialValue: 0,
    step: 1

   }