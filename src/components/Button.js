import React from 'react'
import './Button.css'

function Button (props) {
  let classes = 'button'
  classes += props.operation ? ' operation' : ''
  classes += props.double ? ' double' : ''
  classes += props.triple ? ' triple' : ''
  
  return (
    <button className={classes} onClick={() => props.onClick(props.label)}>
      {props.label}
    </button>
  )
}

export default Button