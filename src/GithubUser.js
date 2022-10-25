import React, { useEffect, useState } from 'react'

function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(respone =>{
            if(respone !== 200){
                setError(new Error)
            }
            return respone.json()
        })
        .then(json => {
            console.log(json)
            setData(json)
        }).catch(error)
    }, [username] )


  return (
    <div>
        {error && <h1>{error.message}</h1>}
        {data && <h1>{data.name}</h1>}
        <p>Followers: {data.followers}</p>
        <p>Repos: {data.public_repos}</p>

    </div>
  )
}

export default GithubUser