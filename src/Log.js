import React from "react";
import { useState } from "react";

function Login() {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    function handleInputName(event){
      const value = event.target.username
      setUsername({ value: username
      })

    }

    function handlePass(event){
      const value = event.target.password
      setPassword({ value: password
      })

    }
    function handleCheck(event){
      const value = event.target.checkbox
      setCheckbox({ value: checkbox
      })

    }
    
        return (
          <div>
            <Welcome username={username} />
            <div className="field">
              <label for="username">Username</label>
              <input
                name="username"
                value={username}
                onChange={handleInputName}
              />
              <label for="password">Password</label>
              <input name="password"  type="password" value={password} onChange={handlePass}/>
              <input name="checkbox" type='checkbox' value={checkbox} onChange={handleCheck}/>
            </div>
          </div>
        );
    
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
