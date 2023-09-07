import React from 'react'
import "./CompPai.style.css"

function CompPai(props) {
  return (
    <div>
        {/* Para receber outros componentes */}
        {props.children}
    </div>
  )
}

export default CompPai