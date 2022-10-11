import React from "react";

import { Welcome } from './Welcome'

//const greeting = <Welcome name='Giovanni'/>


export class App extends React.Component {
    render() {
    return <div> <Welcome name/>  </div>;
    }

}

Welcome.defaultName={
    name: 'Giovanni'

}