import React from 'react'

function ButtonTwo(props) {
  return (
    <button type={props.type}className='btn-two'>{props.text}</button>
  )
}

export default ButtonTwo