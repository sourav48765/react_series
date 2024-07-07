import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' 

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    // fetch('https://api.github.com/users/sourav48765')
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data);

    // })
    // },[])

  return (
    <>
    <div className=' bg-gray-600 text-white p-4 mx-4 text-4xl text-center'>Github Name: {data.name}</div>
    <div className='flex justify-center items-center p-4 bg-gray-600 mx-4'>
    <img src={data.avatar_url} alt="Git Picture" width={400}/>
    </div>
    <h1 className='text-center text-3xl text-wrap p-4 mx-4 bg-gray-600'>Github bio: {data.bio}</h1>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sourav48765')
    return response.json()
}