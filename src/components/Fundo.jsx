import React from 'react'
import dia from "../assets/dia.svg"
import noite from "../assets/noite.svg"
import "./Fundo.style.css"

// Não esqueça de importar os assets

const dataAtual = new Date();

const hora = dataAtual.getHours()

function Fundo() {
  return (
    // imagem de fundo do app
    // mudará conforme a hora do dia
    <figure>
        <img src={ (hora >= 18 | hora <= 5) ? noite : dia } 
        alt={(hora >= 18 | hora <= 5) ? "imagem de noite" : "imagem de dia"} />
    </figure>

  )
}

export default Fundo