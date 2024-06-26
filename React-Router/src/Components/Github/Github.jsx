import React ,{useEffect}from 'react'
import { useState } from 'react'
import { useFetcher ,useLoaderData} from 'react-router-dom'

function Github() {
   const data= useLoaderData()
//     const [data,setData]=useState([])
//  useEffect(()=>{
//     fetch('https://api.github.com/users/abhi4701')
//     .then(res =>res.json())
//     .then(data=>{
//         setData(data)
//     })
//  },[])
  return (
    <div className='text-center m-4 bg-gray-600'>{data.followers}
     <img  src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
    
  )
}

export default Github

export const githubInfoLoader= async()=>{
    const response =await fetch('https://api.github.com/users/abhi4701')
    return response.json()
}