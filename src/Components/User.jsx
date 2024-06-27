import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-purple-500 text-white text-2xl p-4 text-center'> 
      user: {userid}
    </div>
  )
}

export default User
