import React from 'react'
import GithubUser from './GithubUser'
import { useState } from 'react'

function GithubUserList() {
    const [userList, setUserList] = useState(['giogithub89'])
    const [data, setData] = useState('')

    function getUsername(event){
        const username  = event.target.value
        setData(username)
        console.log( username)
    }

    // function findUser(event){
    //     //const username  = event.target.value
    //     event.preventDefault();
    //     setUserList({...userList, data})
    //     setData('')

    // }

    function addUser(event){
        //const value = event.target.elements.username.value
        event.preventDefault();
        setUserList({...userList, data})
        console.log( 'user' , data)
        console.log('list', userList)
        //setData(data)
    }

    // useEffect(()=>{
    //     // const value = event.target.elements.username.value
    //     //  GithubUser(username)
    //     //console.log(userList)
    // },[userList])

  return (
    <div>
        {/* onSubmit={findUser} */}
        <form >
        <input placeholder='Enter a username'  value={data} onChange={getUsername} name='username'></input>
        <button type='submit' onClick={addUser}>Find User</button>
        </form>

        <ul>{userList.map((item, index) =>
            <li><GithubUser  key={index} username={item}/></li>)}
            
        </ul>
        
    </div>

  )
}

export default GithubUserList