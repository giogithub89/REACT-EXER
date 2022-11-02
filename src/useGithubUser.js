import {useState} from 'react'

export default function useGithubUser(username) {
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
   

    async function fetchUser(username){
        setError(null)
        setLoading(true)
        try{
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json
            setData(json)
        }
        catch (error) {
            setError(error)
            setData(null)
        } 
        finally {
            setLoading(false)
        }
    }

   

  return (
    {data, error, loading, onFetch: fetchUser}
  )
}
