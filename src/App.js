import React from "react";

import { Welcome } from './Welcome'


const greeting = <Welcome name='Gloria'/>



export class App extends React.Component {
    render() {
    return <div> 
        
        <strong> {greeting}  </strong>
        
                

    </div>;
    }

}

