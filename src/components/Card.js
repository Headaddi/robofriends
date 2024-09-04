import React from 'react'

export default function Card({ children }) {
  return (
    <div className='tc bg-light-green dib b33 pa3 ma2 grow bw-2 shadow-5'>
        <img src={`https://robohash.org/${children.username}?size=200x200`} alt='robot'/>
        <div>
            <h2>{children.name}</h2>
            <p>{children.email}</p>
        </div>
    </div>
  )
}
