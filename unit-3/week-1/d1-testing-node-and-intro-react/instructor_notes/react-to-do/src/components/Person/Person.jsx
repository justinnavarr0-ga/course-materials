import React from 'react'

export default function Person({ hand, name, height }) {
  // console.log("SHOW ME SOME PROPS", props)
  return (
    <div>
      <p>{name.first}</p>
      <p>{height}</p>
      <p>{hand}</p>
    </div>
  )
}
