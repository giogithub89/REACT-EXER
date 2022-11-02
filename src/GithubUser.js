import React, { useEffect, useState } from 'react'
import useGithubUser from './useGithubUser'

export function GithubUser({username}) {
    const [data, error] = useGithubUser(username)
   

  return (
    <div>
        {error && <h1>{error.message}</h1>}
        {data && <h1>{data.name}</h1>}
       { data && <p>Followers: {data.followers}</p>}
        { data && <p>Repos: {data.public_repos}</p>}

    </div>
  )
}

