import React from 'react'
import Welcome from './Welcome'


class Container  extends React.Component {
  render(){
    const MyContainer ={
        backgroundColor: 'white',
        border: '1px solid red',
        padding: '10px'

    }
    return <div style={MyContainer}>Container
    <Welcome/>
    </div>
  }
}

export default Container