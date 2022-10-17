import React from 'react'



class Container  extends React.Component {
  render(){
    const MyContainer ={
        backgroundColor: 'white',
        border: '1px solid red',
        padding: '10px'

    }
    return <div style={MyContainer}>Container
            <div>{this.props.title}</div>
           
    
        </div>
  }
}

export default Container