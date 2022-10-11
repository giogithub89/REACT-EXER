import React from "react";

const age = 22



export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome {this.props.name} </p> 
           {age > 18 && age < 65 && this.props.name === 'John' && <p> {age} </p>}
         
         </div>;
    }

}

// class Age  extends React.Component {
//     render(){
//         return <p>Is your age {this.props.age} ?</p>
//     }
// }