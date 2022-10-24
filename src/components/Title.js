import React from 'react'

export default function Title(props) {

    const {title} = props 
  return (
    <h1>
      {
        title.split('').map(letter => {
            return (
                <span>{letter.toUpperCase()}</span>
            )
        })
      }
    </h1>
  )
}
