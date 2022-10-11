import React from "react";

const age = 22



export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome {this.props.name} </p> 
           {age > 18 && age < 65  && <p> <Age/> </p>}
         
         </div>;
    }

}

class Age  extends React.Component {
    render(){
        return <p> Your age is {this.props.age}</p>
    }
}
