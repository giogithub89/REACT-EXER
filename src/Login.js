import React from 'react'
import { useLogin } from './useLogin'

export default function Login() {
    const {username, password, onLogin} = useLogin()

  return (
    <div>
       
        <div className="field">
          <label for="username">Username</label>
          <input
            name="username"
            value={username}
            onChange={onLogin}
          />
          <label for="username">Password</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={onLogin}
          />
         
        </div>
      </div>
  )
}
