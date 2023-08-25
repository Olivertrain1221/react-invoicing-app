import React from 'react'

function textField(props) {
  return (
    <div className='txt-field-container'>
        <label className='form-labels'>{props.labelText}</label>
        <input className="form-txt-input" type={props.type}></input>
    </div>
  )
}

export default textField