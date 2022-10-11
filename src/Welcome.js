import React from "react";


export class Welcome extends React.Component {
    render() {
    return <div>
         <p>Welcome, {this.props.name} </p> 
         <p>Is your age {this.props.age} ?</p>
         <p>This is a emoji {this.props.emoji}</p>
         </div>;
    }

}