import {useState} from 'react'
import './form.css'

export function useLogin() {
    
  const [input, setInput] = useState({
    username: '',
    password: '',
})

function onLogin(event) {
    const value = event.target.value
    const name = event.target.name
  
    setInput(() => {
        return {
            [name] : value
        }
    })
}  
console.log(input)

return ({
    username: input.username,
    password: input.password,
    onLogin
})
}





