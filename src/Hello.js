import React from "react"

export class Hello extends React.Component{
    render() {
        return (
        <div>
            <h1>Hello, World!</h1>
          <p>  <Message /> </p>
        </div>
        )
    }
}



export class Message extends React.Component {
    render() {
        return <p>What a beautiful day!</p>
      
    }
}