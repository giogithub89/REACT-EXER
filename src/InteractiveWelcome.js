import React from 'react'
import './form.css'

class InteractiveWelcome extends React.Component {
    state = {
        username: ""
    }
    handleInput = (event)=>{
        //const name = event.target.value
        this.setState({username : event.target.value })

    }
    render(){
        return (
            <div>
                <Welcome username={this.state.username}/>
                <input name="username" value={this.state.username} onChange={this.handleInput}/>
        
            </div>
          )
    }
  
}

export default InteractiveWelcome



class  Welcome extends React.Component {
  render(){
    return (
        <div>
            <h2>
                Welcome, {this.props.username}
            </h2>
    
        </div>
      )
  }
}
