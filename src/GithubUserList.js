import React from 'react'
import GithubUser from './GithubUser'
import { useState } from 'react'

function GithubUserList() {
    const [userList, setUserList] = useState({user: []})
    const [data, setData] = useState({username:''})

    function findUser(event){
        //const value = event.target.username
        event.preventDefault();
        return setUserList({...userList, newUser: event.current})

    }
    function getUsername(event){
        const username  = event.data
        
        setData({...userList, newUser: username})
    }

  return (
    <div>
        <input placeholder='Enter a username' value={data.username} onChange={getUsername}></input>
        <button onClick={findUser}>Find User</button>

        <ul>{userList.user.map((item, index) =>
            <li key={index}>
            <GithubUser username={item}/>
        </li>)}
        </ul>
        
    </div>
  )
}

export default GithubUserList