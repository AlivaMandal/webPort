import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch("https://api.github.com/users/AlivaMandal")
    //   .then(response => response.json()).
    //   then(data => {
    //     console.log(data)
    //     setData(data)
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        GitHub Followers:{data.public_repos}
      <img src={data.avatar_url} alt='gitPicture' width={300}  />
         </div>
  )
}

export default Github

export const githubinfo = async () =>{
    const res = await fetch('https://api.github.com/users/AlivaMandal')
return res.json();
}