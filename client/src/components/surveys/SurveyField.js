import React from 'react'

export default ({input, label, meta:{error,touched}})=>{
  return (
    <div>
      <label>{label}</label>
      <input {...input}/>
      <div className="red-text mb-4">
      {touched && error }
      </div>
    </div>

  )
}