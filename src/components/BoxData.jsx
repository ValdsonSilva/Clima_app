import React from 'react'
import "./BoxData.style.css"

function BoxData(props) {
  return (
    <div className='Boxdata'>
        {props.children}
    </div>
  )
}

export default BoxData