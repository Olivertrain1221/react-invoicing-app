import React from 'react'

function deleteButton(props) {
  return (
    <button type={props.type}className='btn-delete'>{props.text}</button>
  )
}

export default deleteButton