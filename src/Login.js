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
        
        this.setState({[name] : type === 'checkbox' ? checked : value }
        )
    }
    componentDidUpdate(){
      console.log(this.state.password)
    }
    render(){
        return (
          <div>
            <Welcome username={this.state.username} />
            <div className="field">
              <label for="username">Username</label>
              <input
                name="username"
                value={this.state.username}
                onChange={this.handleInput}
              />
              <label for="username">Password</label>
              <input
                name="password"
                type="password"
                value={this.state.password}
            
                onChange={this.handleInput}
              />
              <input
                name="checked"
                type="checkbox"
                value={this.state.checked}
                onChange={this.handleInput}
              />
              <button 
              style={{backgroundColor: this.state.password.length < 8 ? 'red': 'green'}}> Login </button>
            </div>
          </div>
        );
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
