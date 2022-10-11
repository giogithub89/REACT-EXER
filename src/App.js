import React from "react";

import { Welcome } from './Welcome'

const greeting = <Welcome name='Gloria' age={22}/>


export class App extends React.Component {
    render() {
    return <div> 
        <h2> <Welcome name="Gloria" age='22'/>  </h2>
        <p> {greeting}  </p>
                

    </div>;
    }

}

