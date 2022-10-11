import React from "react";



export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome, {this.props.name} </p> 
         <Age age="22"/>
         
         
         </div>;
    }

}

class Age  extends React.Component {
    render(){
        return <p>Is your age {this.props.age} ?</p>
    }
}