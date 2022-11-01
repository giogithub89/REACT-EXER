import React, {createRef} from 'react'

import './form.css'

class Login extends React.Component {
   _formRef = createRef()
    
    handleInput = (event)=>{
      event.preventDefault();
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const checkbox = event.target.elements.checkbox.checked

        console.log({username, password, checkbox})
       
    }
    componentDidMount(){
      this._formRef.current.focus()
    }
  
    
    render(){
        return (
          <div>
            
            <form  onSubmit={this.handleInput}>
            <div className="field">
              <label for="username">Username</label>
              <input
                name="username"  
                ref={this._formRef}
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



