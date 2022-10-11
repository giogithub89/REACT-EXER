import React from "react";

import { Welcome } from './Welcome'

const greeting = <Welcome name='Gloria' age={22} emoji="XD"/>
const anotherEmoji = "😃"


export class App extends React.Component {
    render() {
    return <div> 
        
        <strong> {greeting}  </strong>
        <strong> This is another Emoji {anotherEmoji}  </strong>
                

    </div>;
    }

}

