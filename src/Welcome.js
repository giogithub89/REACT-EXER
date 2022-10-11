import React from "react";

const age = 22


export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome {this.props.name} </p> 
           { <p> {age} </p> && this.props.age}
         
         </div>;
    }

}

// class Age  extends React.Component {
//     render(){
//         return <p>Is your age {this.props.age} ?</p>
//     }
// }