import React from 'react'
import GithubUser from './GithubUser'
import { useState } from 'react'

function GithubUserList() {
    const [userList, setUserList] = useState({user: []})
    //const [data, setData] = useState({username:''})

    function findUser(event){
        const value = event.target.elements.username.value
        event.preventDefault();
        return setUserList({...userList, value})

    }
    // function getUsername(event){
    //     const username  = event.data
        
    //     setData({...userList, newUser: username})
    // }
    function message(event){
        const value = event.target.elements.username.value
        console.log(value)
    }

  return (
    <div>
        <form onSubmit={findUser}>
        <input placeholder='Enter a username' data-testid="username-input" name='username' ></input>
        <button type='submit' onClick={message}>Find User</button>
        </form>

        <ul>{userList.user.map((item, index) =>
            <li key={index}>
            <GithubUser username={item}/>
        </li>)}
        </ul>
        
    </div>
  )
}

export default GithubUserList