import React from 'react'

import './form.css'

class Login extends React.Component {
    
    handleInput = (event)=>{
      event.preventDefault();
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const checkbox = event.target.elements.checkbox.checked

        console.log({username, password, checkbox})
       

    }
  
    
    render(){
        return (
          <div>
            
            <form onSubmit={this.handleInput}>
            <div className="field">
              <label for="username">Username</label>
              <input
                name="username"  
              />
              <label for="username">Password</label>
              <input
                name="password"
                type="password"
              />
              <label>Remember me</label>
              <input
                name="checkbox"
                type="checkbox"
              />
              <button type='submit' className="login_btn">Login</button>
              <button type="reset" className="reset_btn">Reset</button>
            </div>
            </form>
          </div>
        );
    }

}
export default Login



