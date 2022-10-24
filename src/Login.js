import React from 'react'
import './form.css'

class Login extends React.Component {
    state = {
        username: "",
        password:"",
        checkbox: false,
        disabled: true,
        
    }
    handleInput = (event)=>{
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        this.setState({[name] : type === 'checkbox' ? checked : value })

    }
    onLogin = (event) =>{
        const value = event.target.disable
        this.setState({
            disabled: value
        })

    }
    reset = ()=> {
      this.setState({
        username:'', password:'', checkbox: false
        
      })

    }
    componentDidUpdate(){
      console.log(this.state)
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
              <label>Remember me</label>
              <input
                name="checkbox"
                type="checkbox"
                
                value={this.state.checked}
                onChange={this.handleInput}
              />
              <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin} className="login_btn">Login</button>
              <button onClick={this.reset} className="reset_btn">Reset</button>
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
