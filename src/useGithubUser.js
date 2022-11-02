import React, {useState, useEffect} from 'react'

export default function useGithubUser(username) {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
   

    async function fetchUser(username){
        setError(null)
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json
            setData(json)
        }
        catch (error) {
            setError(error)
            setData(null)
        }   
    }

    useEffect(()=>{
        fetchUser(username)
    },[username])

  return (
    {data, error}
  )
}
