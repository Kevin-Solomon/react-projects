import React from 'react'
import './InputField.css'

function InputField({placeholder,changeHandler}) {
  return (
    <div className="search">
      <input 
        placeholder={placeholder}
        type="text"
        onChange={changeHandler}>
      </input>
    </div>
  )
}

export default InputField
