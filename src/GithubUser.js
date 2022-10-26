
import React, { useEffect, useState } from 'react'

function GithubUser({username}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
     const [error, setError] = useState(null)

    useEffect(() => {
         setError(null)
         setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
        .then(respone =>{
            if(respone.status !== 200){
                setError(new Error('user not found'))
            }
            return respone.json()
        })
        .then(json => {
            console.log(json)
            setLoading(false)
            setData(json)
        })
        .catch((error) =>{
            setError(error)
        })
    }, [username] )


  return (
    <div>
         {loading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        {data && <h1>{data.name}</h1>}
        { data && <p>Followers: {data.followers}</p>}
        { data && <p>Repos: {data.public_repos}</p>}

    </div>
  )
}

export default GithubUser