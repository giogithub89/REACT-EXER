import React, {useState, useEffect} from 'react'
import useSWR from 'swr'

const fetchSWR = (url) =>{ fetch(url) .then((res)=>{
      res.json()
    }
      
    )
}

export default function useGithubUser(username) {
    
    
      const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetchSWR)

   

  return {data, error}
    //loading: !data && !error
    
  
}
