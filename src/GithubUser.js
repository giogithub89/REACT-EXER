import React, { useEffect, useState } from 'react'

function GithubUser({username}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(respone =>{
            return respone.json()
        })
        .then(json => {
            console.log(json)
            setData(json)
        })
    }, [username] )


  return (
    <div>

        {data && <h1>{data.name}</h1>}
        <p>Followers: {data.followers}</p>
        <p>Repos: {data.public_repos}</p>

    </div>
  )
}

export default GithubUser