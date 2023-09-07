import React from 'react'
import dia from "../assets/dia.svg"
import noite from "../assets/noite.svg"
import "./Fundo.style.css"

// Não esqueça de importar os assets

function Fundo() {
  return (
    // imagem de fundo do app
    // mudará conforme a hora do dia
    <figure>
        <img src={dia} alt="Imagem de dia" />
    </figure>

  )
}

export default Fundo