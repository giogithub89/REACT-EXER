import React from "react";

const age = 22


export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome {this.props.name} </p> 
           {age > 18 && <p> {age} </p>}
         
         </div>;
    }

}

// class Age  extends React.Component {
//     render(){
//         return <p>Is your age {this.props.age} ?</p>
//     }
// }