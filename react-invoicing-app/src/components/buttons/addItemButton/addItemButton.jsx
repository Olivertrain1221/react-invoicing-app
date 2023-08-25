import React from 'react'

function addItemButton(props) {
  return (
    <button type={props.type}className='btn-item-add'>{props.text}</button>
  )
}

export default addItemButton