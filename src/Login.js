import React from 'react'
import './form.css'

class Login extends React.Component {
    state = {
        username: "",
        password:"",
        checkbox: false
    }
    handleInput = (event)=>{
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        this.setState({[name] : type === 'checkbox' ? checked : value })

    }
    render(){
        return (
            <div>
                <Welcome username={this.state.username}/>
                <div className='field'>
                <input name="username" value={this.state.username} onChange={this.handleInput}/>
                <input name="password" type="password" value={this.state.password} onChange={this.handleInput}/>
                <input name="checked" type="checkbox" value={this.state.checked} onChange={this.handleInput}/>
                </div>
        
            </div>
          )
    }
  
}

export default Login



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
